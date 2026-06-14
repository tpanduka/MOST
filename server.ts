import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { db } from "./src/db/index.js";
import { newsArticles, institutions, institutionTranslations } from "./src/db/schema.js";
import { eq, desc } from "drizzle-orm";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/seed", async (req, res) => {
    try {
      // Seed some initial news
      await db.insert(newsArticles).values([
        { slug: "national-innovation-agency-call-2026", category: "Announcements", status: "Published", publishedDate: new Date("2026-10-14") },
        { slug: "shilpa-sena-exhibition-dates", category: "Events", status: "Published", publishedDate: new Date("2026-10-10") },
        { slug: "ai-research-guidelines-issued", category: "Policy", status: "Published", publishedDate: new Date("2026-10-05") }
      ]).onConflictDoNothing();

      // Seed some institutions
      const insertedInstitutions = await db.insert(institutions).values([
        { acronym: "ACCIMT", websiteUrl: "https://www.accimt.ac.lk/" },
        { acronym: "NSF", websiteUrl: "https://www.nsf.gov.lk/" },
        { acronym: "ITI", websiteUrl: "https://www.iti.lk/" },
        { acronym: "NIFS", websiteUrl: "https://www.nifs.ac.lk/" },
        { acronym: "Planetarium", websiteUrl: "https://most.gov.lk/" },
        { acronym: "NERDC", websiteUrl: "https://www.nerdc.lk/" },
        { acronym: "SLIC", websiteUrl: "https://slic.gov.lk/" },
        { acronym: "NASTEC", websiteUrl: "https://nastec.gov.lk/" }
      ]).onConflictDoNothing().returning();

      if (insertedInstitutions.length > 0) {
        // Prepare translations manually avoiding strict indexing assumptions
        const translationsToInsert = [
          { institutionId: insertedInstitutions[0]?.id, language: 'en', name: "Arthur C. Clarke Institute for Modern Technologies", description: "Accelerating the introduction of modern technologies by providing training and initiating research." },
          { institutionId: insertedInstitutions[1]?.id, language: 'en', name: "National Science Foundation", description: "Promoting scientific research and facilitating international collaboration." },
          { institutionId: insertedInstitutions[2]?.id, language: 'en', name: "Industrial Technology Institute", description: "Providing innovative technology to fuel industrial development." },
          { institutionId: insertedInstitutions[3]?.id, language: 'en', name: "National Institute of Fundamental Studies", description: "Pioneering basic scientific research across many disciplines." },
          { institutionId: insertedInstitutions[4]?.id, language: 'en', name: "Sri Lanka Planetarium", description: "Promoting astronomy and space sciences among the general public." },
          { institutionId: insertedInstitutions[5]?.id, language: 'en', name: "National Engineering R&D Centre", description: "Development and transfer of appropriate technologies for industry." },
          { institutionId: insertedInstitutions[6]?.id, language: 'en', name: "Sri Lanka Inventors Commission", description: "Fostering and promoting innovativeness among Sri Lankans." },
          { institutionId: insertedInstitutions[7]?.id, language: 'en', name: "National Science and Technology Commission", description: "Serving as the apex policy advisory body to the government on STI." },
        ].filter(t => t.institutionId !== undefined);

        if (translationsToInsert.length > 0) {
          await db.insert(institutionTranslations).values(translationsToInsert).onConflictDoNothing();
        }
      }

      res.json({ success: true, message: "Sample data seeded." });
    } catch (error: any) {
      console.error("Seed error:", error);
      res.status(500).json({ error: "Seed failed" });
    }
  });

  app.get("/api/institutions", async (req, res) => {
    try {
      const allInstitutions = await db.select({
        id: institutions.id,
        acronym: institutions.acronym,
        websiteUrl: institutions.websiteUrl,
        name: institutionTranslations.name,
        description: institutionTranslations.description,
      })
      .from(institutions)
      .leftJoin(
        institutionTranslations, 
        eq(institutions.id, institutionTranslations.institutionId)
      );
      res.json(allInstitutions);
    } catch (error: any) {
      console.error("Failed to fetch institutions:", error);
      res.status(500).json({ error: "Failed to fetch institutions." });
    }
  });

  app.get("/api/news", async (req, res) => {
    try {
      const news = await db.select().from(newsArticles)
        .orderBy(desc(newsArticles.publishedDate))
        .limit(10);
      res.json(news);
    } catch (error: any) {
      console.error("Failed to fetch news:", error);
      res.status(500).json({ error: "Failed to fetch news.", details: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
