import { Metadata } from 'next'

export const siteConfig = {
    name: 'Revipro AG',
    description: 'Ihr Partner für präzise Revision in Gemeinden und moderne Wirtschaftsprüfung. Spezialisiert auf öffentliche Hand & KMU.',
    url: 'https://revipro.ch',
    ogImage: 'https://revipro.ch/og-image.png',
    links: {
        email: 'kontakt@revipro.ch',
        phone: '+41 44 240 02 02',
    },
    address: {
        street: 'Zimmerbergstrasse 10',
        city: 'Thalwil',
        postalCode: '8800',
        country: 'Schweiz',
        countryCode: 'CH',
    },
}

interface PageMetadata {
    title: string
    description: string
    path: string
    keywords?: string[]
    ogImage?: string
}

export function generatePageMetadata({
    title,
    description,
    path,
    keywords = [],
    ogImage,
}: PageMetadata): Metadata {
    const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`
    const url = `${siteConfig.url}${path}`
    const image = ogImage || siteConfig.ogImage

    return {
        title: fullTitle,
        description,
        keywords: [
            'Wirtschaftsprüfung',
            'Revision',
            'Beratung',
            'Treuhand',
            'Gemeinden',
            'KMU',
            'Schweiz',
            'RAB',
            'Zürich',
            ...keywords,
        ],
        authors: [{ name: siteConfig.name }],
        creator: siteConfig.name,
        publisher: siteConfig.name,
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'website',
            locale: 'de_CH',
            url,
            title: fullTitle,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [image],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        image: siteConfig.ogImage,
        email: siteConfig.links.email,
        telephone: siteConfig.links.phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            postalCode: siteConfig.address.postalCode,
            addressCountry: siteConfig.address.countryCode,
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.links.phone,
            contactType: 'customer service',
            email: siteConfig.links.email,
            availableLanguage: ['de'],
        },
        sameAs: [
            // Add social media links here when available
        ],
    }
}

export function generateLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        image: siteConfig.ogImage,
        telephone: siteConfig.links.phone,
        email: siteConfig.links.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            postalCode: siteConfig.address.postalCode,
            addressCountry: siteConfig.address.countryCode,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '47.2902',
            longitude: '8.5617',
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00',
            },
        ],
        priceRange: '$$',
        areaServed: {
            '@type': 'Country',
            name: 'Switzerland',
        },
    }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${siteConfig.url}${item.url}`,
        })),
    }
}

export function generateServiceSchema(service: {
    name: string
    description: string
    provider?: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
            '@type': 'Organization',
            name: service.provider || siteConfig.name,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Switzerland',
        },
    }
}

export function generatePersonSchema(person: {
    name: string
    jobTitle: string
    image?: string
    email?: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: person.name,
        jobTitle: person.jobTitle,
        image: person.image,
        email: person.email,
        worksFor: {
            '@type': 'Organization',
            name: siteConfig.name,
        },
    }
}
