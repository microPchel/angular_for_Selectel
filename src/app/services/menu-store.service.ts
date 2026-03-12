import { Injectable, computed, signal } from '@angular/core';

import { MENU_DATA } from '../data/menu.data';
import { MenuSection } from '../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuStoreService {
  private readonly sections = signal<MenuSection[]>(structuredClone(MENU_DATA));

  readonly activeMenuId = signal(this.sections()[0]?.id ?? '');

  readonly menus = computed(() => this.sections());

  readonly activeMenu = computed(() => {
    const currentId = this.activeMenuId();
    return this.sections().find((section) => section.id === currentId) ?? null;
  });

  readonly selectedCount = computed(() => {
    const currentMenu = this.activeMenu();
    if (!currentMenu) {
      return 0;
    }

    return currentMenu.items.filter((item) => item.selected).length;
  });

  readonly selectedTotal = computed(() => {
    const currentMenu = this.activeMenu();
    if (!currentMenu) {
      return 0;
    }

    return currentMenu.items
      .filter((item) => item.selected)
      .reduce((sum, item) => sum + item.value, 0);
  });

  setActiveMenu(menuId: string): void {
    this.activeMenuId.set(menuId);
  }

  toggleItem(menuId: string, itemId: string, checked: boolean): void {
    this.sections.update((menus) =>
      menus.map((menu) => {
        if (menu.id !== menuId) {
          return menu;
        }

        return {
          ...menu,
          items: menu.items.map((item) => {
            if (item.id !== itemId) {
              return item;
            }

            return {
              ...item,
              selected: checked,
            };
          }),
        };
      }),
    );
  }
}
