export interface NavigationItem {
  label: string
  href: string
  items?: NavigationItem[]
}

export interface IndustryItem {
  label: string
  href: string
  icon?: string
}

export const topBarLinks: NavigationItem[] = [
  { label: "Innovation Hub", href: "/innovation" },
  { label: "Digital Advantage", href: "/digitaladvantage" },
  { label: "Marketplace Strategy", href: "/marketplace-position" },
  { label: "Success Framework", href: "/success-framework" },
  { label: "Partners", href: "/partners" },
]

export const headerValueItems: NavigationItem[] = [
  { label: "About Us", href: "/about-us" }, // Updated to point to /about-us
  { label: "Why Partner With Us", href: "/outcome-driven-excellence" }, // Updated to point to /outcome-driven-excellence
  { label: "Get In Touch", href: "/get-in-touch" }, // Updated Get In Touch to point to /get-in-touch
  { label: "12 Cylinder Approach", href: "/12-cylinder-approach" }, // Updated route from /12-cylinder-engine-approach to /12-cylinder-approach
  { label: "Advanced Research Methods", href: "/advanced-research-methods" }, // Updated Advanced Research Methods to point to /advanced-research-methods
  { label: "Strategic Execution", href: "/strategic-execution" }, // Updated Strategic Execution to point to /strategic-execution
]

export const performanceStructureItems: NavigationItem[] = [
  { label: "Leadership Succession Planning", href: "/leadership-succession-planning" },
  { label: "Talent Performance Optimization", href: "/talent-performance-optimization" },
  { label: "High-Volume Talent Acquisition", href: "/high-volume-talent-acquisition" },
]

export const talentAcquisitionItems: NavigationItem[] = [
  { label: "Premium Talent Acquisition", href: "/acquisition" },
  { label: "Targeted Executive Search", href: "/targeted-executive-search" },
  { label: "Exclusive Search Engagements", href: "/exclusive-search-engagements" },
  { label: "AX-RPO", href: "/ax-rpo" }, // Updated label from AF-RPO to AX-RPO
]

export const executivePlacementItems: NavigationItem[] = [
  { label: "Executive Placement", href: "/strategic-executive-placement" }, // Updated label from "Strategic Executive Placement" to "Executive Placement"
  { label: "Director Technology", href: "/director-level-technology" }, // Updated label from "Technology Executives" to "Director Technology"
  { label: "External Searches", href: "/external-leadership-search" },
  { label: "Board Assessment Tools", href: "/board-assessment-tools" },
  { label: "Executive Assessment", href: "/executive-assessment-services" }, // Updated label from "Executive Assessments" to "Executive Assessment"
  { label: "Board Restructuring Tools", href: "/board-restructuring-tools" },
  { label: "Board Consummating Checklist", href: "/board-consummating-tools" },
]

export const ourValueItems: NavigationItem[] = [
  { label: "About Us", href: "/about-us" }, // Updated to point to /about-us
  { label: "Why Partner With Us", href: "/outcome-driven-excellence" }, // Updated to point to /outcome-driven-excellence
  { label: "Get In Touch", href: "/get-in-touch" }, // Updated Get In Touch to point to /get-in-touch
  { label: "12 Cylinder Approach", href: "/12-cylinder-approach" }, // Updated route from /12-cylinder-engine-approach to /12-cylinder-approach
  { label: "Advanced Research Methods", href: "/advanced-research-methods" }, // Updated Advanced Research Methods to point to /advanced-research-methods
  { label: "Strategic Execution", href: "/strategic-execution" }, // Updated Strategic Execution to point to /strategic-execution
  { label: "Our Motivation", href: "/our-value/our-motivation" },
  { label: "Our Story", href: "/our-value/our-story" },
  { label: "Global Presence", href: "/our-value/global-presence" },
  { label: "Industry Insights", href: "/our-value/industry-insights" },
  { label: "News & Updates", href: "/our-value/news-updates" },
]

export const footerValueItems: NavigationItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Defining Edge", href: "/our-defining-edge" },
  { label: "Our Driving Force", href: "/our-driving-force" }, // Updated Our Driving Force route from /contact to /our-driving-force
  { label: "The Approach", href: "/12-cylinder-approach" }, // Updated route from /12-cylinder-engine-approach to /12-cylinder-approach
  { label: "Global Presence", href: "/unmatched-global-presense" }, // Updated Global Presence to point to /unmatched-global-presense
  { label: "Marketplace", href: "/marketplace-position" },
]

export const industries: IndustryItem[] = [
  { label: "Education", href: "/education" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Finance", href: "/finance" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Human Resources", href: "/human-resources" },
  { label: "Law", href: "/law" },
  { label: "Marketing", href: "/marketing" },
  { label: "Personnel", href: "/personnel" },
  { label: "Talent Acquisition", href: "/talent-acquisition" }, // Updated Talent Acquisition to point to /talent-acquisition route
  { label: "Sales", href: "/sales" },
  { label: "Technology", href: "/technology" },
]
