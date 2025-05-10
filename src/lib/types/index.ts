export type NavLink = {
    name: string;
    href: string;
};

export type Feature = {
    title: string;
    description: string;
    status?: 'completed' | 'in-progress' | 'planned';
    videoUrl: string;
    posterUrl: string;
};

export type RoadmapItemStatus = 'completed' | 'in-progress' | 'planned';

export type RoadmapItem = {
    quarter: string;
    title: string;
    description: string;
    completed: boolean;
};

// Enhanced roadmap item with more detailed status tracking
export type EnhancedRoadmapItem = {
    id: string;
    quarter: string;
    title: string;
    description: string;
    status: RoadmapItemStatus;
    progress: number; // 0-100
    estimatedCompletion?: string; // ISO date string
    completedAt?: string; // ISO date string
    dependencies?: string[]; // IDs of items this depends on
};

// Grouping of roadmap items into logical phases
export type RoadmapPhase = {
    id: string;
    name: string;
    description: string;
    timeframe: string;
    items: EnhancedRoadmapItem[];
};

export type TeamMember = {
    name: string;
    role: string;
    bio: string;
};
