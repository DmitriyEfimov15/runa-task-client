export type TSideBarContentItem = {
  title: string;
  icon: React.ComponentType;
  path: string;
};

export type TSidebarMainContentProps = {
  items: TSideBarContentItem[];
};
