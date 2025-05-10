import type { NavLink, Feature, RoadmapItem, RoadmapPhase, TeamMember } from '../types';

export const navLinks: NavLink[] = [
    { name: 'Features', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'About', href: '#about' }
];

export const features: Feature[] = [
    {
        title: 'File Explorer',
        description: 'Seamlessly access your folder structure with our integrated file explorer that automatically processes PDFs for citation use.',
        status: 'completed',
        posterUrl: '/images/file-explorer.webp',
        videoUrl: '/videos/file-explorer.webm'
    },
    {
        title: 'PDF Analysis and Reader',
        description: 'Erti analyses your PDFs in your folder and offers to read them in the same app. If you are connected to the internet Erti will try to fetch source metadata (necessary for citation) for you.',
        status: 'completed',
        posterUrl: '/images/pdf-processing.webp',
        videoUrl: '/videos/pdf-processing.webm'
    },
    {
        title: 'Intuitive Text Editor',
        description: 'Built with researchers in mind, Erti provides a clean, distraction-free writing environment that feels familiar yet powerful.',
        status: 'completed',
        posterUrl: '/images/core-editor.webp',
        videoUrl: '/videos/core-editor.webm'
    },
    {
        title: 'Source Metadata Editor',
        description: 'Precisely control your citation metadata to ensure perfect formatting in your research documents.',
        status: 'in-progress',
        posterUrl: '/images/metadata-editor.webp',
        videoUrl: '/videos/metadata-editor.webm'
    }
];

// Enhanced roadmap with phases and more detailed progress tracking
export const roadmapPhases: RoadmapPhase[] = [
    {
        id: 'foundation',
        name: 'Foundation',
        description: 'Core functionality and essential features',
        timeframe: '2024',
        items: [
            {
                id: 'core-editor',
                quarter: 'Q4 2024',
                title: 'Core Editor',
                description: 'Text editor foundation with essential writing capabilities',
                status: 'completed',
                progress: 100,
                completedAt: '2024-11-15'
            },
            {
                id: 'pdf-analysis',
                quarter: 'Q1 2025',
                title: 'PDF Analysis & Citation',
                description: 'PDF processing and automated citation features',
                status: 'completed',
                progress: 100,
                completedAt: '2025-01-30'
            }
        ]
    },
    {
        id: 'citation-tools',
        name: 'Citation Tools',
        description: 'Advanced citation and bibliography management',
        timeframe: 'Q2-Q3 2025',
        items: [
            {
                id: 'metadata-editor',
                quarter: 'Q2 2025',
                title: 'Source Metadata Editor',
                description: 'Enhanced control over citation metadata',
                status: 'in-progress',
                progress: 65,
                estimatedCompletion: '2025-05-30'
            },
            {
                id: 'bibliography',
                quarter: 'Q3 2025',
                title: 'Bibliography Generation & Footnotes',
                description: 'Automatic creation of bibliography based on used citations and footnotes support',
                status: 'planned',
                progress: 10,
                estimatedCompletion: '2025-08-15'
            }
        ]
    },
    {
        id: 'export-integration',
        name: 'Export & Integration',
        description: 'Document export and enhanced PDF features',
        timeframe: 'Q4 2025',
        items: [
            {
                id: 'pdf-export',
                quarter: 'Q4 2025',
                title: 'Export to PDF',
                description: 'PDF export with custom styling',
                status: 'planned',
                progress: 0,
                estimatedCompletion: '2025-10-30'
            },
            {
                id: 'enhanced-pdf',
                quarter: 'Q4 2025',
                title: 'Enhanced PDF Integration',
                description: 'Improved citation location finding within source PDFs',
                status: 'planned',
                progress: 0,
                estimatedCompletion: '2025-12-15'
            }
        ]
    },
    {
        id: 'future',
        name: 'Future Vision',
        description: 'Long-term features and enhancements',
        timeframe: '2026+',
        items: [
            {
                id: 'integrated-research',
                quarter: '2026',
                title: 'Integrated Research Experience',
                description: 'Seamless reading, note-taking, and writing workflow',
                status: 'planned',
                progress: 0,
                estimatedCompletion: '2026-06-30'
            }
        ]
    }
];

// Keep the original roadmap for backward compatibility
export const roadmap: RoadmapItem[] = [
    {
        quarter: 'Q4 2024',
        title: 'Core Editor',
        description: 'Text editor foundation with essential writing capabilities',
        completed: true
    },
    {
        quarter: 'Q1 2025',
        title: 'PDF Analysis & Citation',
        description: 'PDF processing and automated citation features',
        completed: true
    },
    {
        quarter: 'Q2 2025',
        title: 'Source Metadata Editor',
        description: 'Enhanced control over citation metadata',
        completed: false
    },
    {
        quarter: 'Q3 2025',
        title: 'Bibliography Generation & Footnotes',
        description: 'Automatic creation of bibliography based on used citations and footnotes support',
        completed: false
    },
    {
        quarter: 'Q4 2025',
        title: 'Export to PDF',
        description: 'PDF export with custom styling',
        completed: false
    },
    {
        quarter: 'Q4 2025',
        title: 'Enhanced PDF Integration',
        description: 'Improved citation location finding within source PDFs',
        completed: false
    },
    {
        quarter: '2026',
        title: 'Integrated Research Experience',
        description: 'Seamless reading, note-taking, and writing workflow',
        completed: false
    }
];

export const team: TeamMember[] = [
    {
        name: 'Akaki Mikaia',
        role: 'Founder & Lead Developer',
        bio: 'Passionate about creating tools that enhance productivity, creativity and contributes to community with positive impact.'
    }
];

export const citationData: Feature[] = [
    {
        description: 'Smart matching using machine learning finds the most similar sentences',
        title: 'Smart Matching',
        posterUrl: '/images/smart-matching.webp',
        videoUrl: '/videos/smart-matching.webm'
    },
    {
        description: 'Add sources while typing',
        title: 'Manual trigger for citation component',
        posterUrl: '/images/citation-trigger.webp',
        videoUrl: '/videos/citation-trigger.webm'
    },
    {
        description: 'Add or remove citations when interacting to citation component',
        title: 'Easy Citation Management',
        posterUrl: '/images/citation-management.webp',
        videoUrl: '/videos/citation-management.webm',
    },
    {
        description: 'Switch citation styles instantly, updating your entire document',
        title: 'Citation Style Switching',
        posterUrl: '/images/style-switching.webp',
        videoUrl: '/videos/style-switching.webm'
    }
];
