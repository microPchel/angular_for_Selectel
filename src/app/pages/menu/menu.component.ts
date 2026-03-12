import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuStoreService } from '../../services/menu-store.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  readonly menuStore = inject(MenuStoreService);

  setActiveMenu(menuId: string): void {
    this.menuStore.setActiveMenu(menuId);
  }

  onToggleItem(menuId: string, itemId: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    this.menuStore.toggleItem(menuId, itemId, input.checked);
  }
}
