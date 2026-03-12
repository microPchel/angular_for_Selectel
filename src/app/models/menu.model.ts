export interface MenuItem {
  id: string;
  title: string;
  value: number;
  selected: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}
