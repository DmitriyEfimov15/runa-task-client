export type TSideBarContentItem = {
    title: string;
    icon: React.ComponentType;
    url: string;
}

export type TSidebarMainContentProps = {
    items: TSideBarContentItem[];
}