// PDF Text Extraction Helper
// This script helps you extract and organize project information

const fs = require('fs');
const path = require('path');

// Project extraction template
const projectExtractionTemplate = {
  projects: [
    {
      name: "Project 1 Name",
      description: "Brief description of what the project does",
      technologies: ["Technology1", "Technology2", "Technology3"],
      features: [
        "Feature 1",
        "Feature 2", 
        "Feature 3"
      ],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://your-project1-demo.com",
      images: [
        "homepage.png",
        "features.png",
        "admin.png"
      ]
    }
    // Add more projects as needed
  ]
};

// Function to help organize extracted information
function organizeProjectInfo(rawText) {
  const projects = [];
  
  // Split text by project sections (adjust based on your PDF structure)
  const projectSections = rawText.split(/Project \d+|## \w+/);
  
  projectSections.forEach((section, index) => {
    if (section.trim()) {
      const project = {
        name: extractProjectName(section),
        description: extractDescription(section),
        technologies: extractTechnologies(section),
        features: extractFeatures(section),
        githubUrl: extractGitHubUrl(section),
        liveUrl: extractLiveUrl(section)
      };
      
      if (project.name) {
        projects.push(project);
      }
    }
  });
  
  return projects;
}

// Helper functions to extract specific information
function extractProjectName(text) {
  // Look for project title patterns
  const titleMatch = text.match(/(?:Project|Title|Name):\s*(.+)/i);
  return titleMatch ? titleMatch[1].trim() : null;
}

function extractDescription(text) {
  // Look for description patterns
  const descMatch = text.match(/(?:Description|About|Overview):\s*(.+?)(?:\n|$)/i);
  return descMatch ? descMatch[1].trim() : null;
}

function extractTechnologies(text) {
  // Look for technology lists
  const techMatch = text.match(/(?:Technologies|Tech Stack|Built with):\s*(.+)/i);
  if (techMatch) {
    return techMatch[1].split(/[,;]/).map(tech => tech.trim());
  }
  return [];
}

function extractFeatures(text) {
  // Look for feature lists
  const features = [];
  const featureMatches = text.match(/(?:Features|Key Features):\s*([\s\S]+?)(?:\n\n|\n[A-Z]|$)/i);
  if (featureMatches) {
    const featureText = featureMatches[1];
    const featureList = featureText.split(/\n/).filter(line => line.trim().startsWith('-') || line.trim().startsWith('•'));
    features.push(...featureList.map(feature => feature.replace(/^[-•]\s*/, '').trim()));
  }
  return features;
}

function extractGitHubUrl(text) {
  const githubMatch = text.match(/(?:GitHub|Repository):\s*(https?:\/\/github\.com\/[^\s]+)/i);
  return githubMatch ? githubMatch[1] : null;
}

function extractLiveUrl(text) {
  const liveMatch = text.match(/(?:Live|Demo|Website):\s*(https?:\/\/[^\s]+)/i);
  return liveMatch ? liveMatch[1] : null;
}

// Export the template and functions
module.exports = {
  projectExtractionTemplate,
  organizeProjectInfo,
  extractProjectName,
  extractDescription,
  extractTechnologies,
  extractFeatures,
  extractGitHubUrl,
  extractLiveUrl
};

console.log("PDF Text Extraction Helper Ready!");
console.log("Use this script to organize your project information from the PDF.");
console.log("Copy and paste text from your PDF into the organizeProjectInfo function.");
