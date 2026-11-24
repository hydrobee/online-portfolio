export type ProjectCategory = 'personal' | 'internship' | 'hackathon';

export type ProjectFilter = 'all' | ProjectCategory;

export interface ImageAsset {
  readonly src: string;
  readonly alt: string;
}

export interface ProjectLinks {
  readonly live?: string;
  readonly code?: string;
  readonly trailer?: string;
}

/** The small arrow link shown on the home page card. */
export interface ProjectHighlight {
  readonly url: string;
  readonly ariaLabel: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly tagline: string;
  /** Short line for the home page card. Falls back to `tagline`. */
  readonly summary?: string;
  readonly description: string;
  readonly details?: string;
  readonly category: ProjectCategory;
  readonly year: string;
  readonly tech: readonly string[];
  readonly logo: ImageAsset;
  readonly wordmark: ImageAsset;
  /** Snapshot shown at the end of the hover animation. */
  readonly shot?: ImageAsset;
  /** Logo is a full-bleed cover image instead of a centred logo. */
  readonly cover?: boolean;
  readonly links: ProjectLinks;
  readonly highlight?: ProjectHighlight;
}

export interface ProjectFilterOption {
  readonly id: ProjectFilter;
  readonly label: string;
}
