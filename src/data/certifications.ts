export interface Certification {
  title: string
  issuer: string
  date: string
  image: string
  description: string
}

export const certifications: Certification[] = [
  {
    title: 'Data Engineer',
    issuer: 'Datacamp',
    date: 'June 26, 2025',
    image: '/images/certifications/data-engineer.jpg',
    description: 'Data engineering certification covering data pipelines, ETL processes, and database management.',
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Forage',
    date: 'March 18, 2025',
    image: '/images/certifications/tata-certificate.jpg',
    description: 'Data visualisation certification focusing on transforming data into actionable insights for business decision-making.',
  },
]
