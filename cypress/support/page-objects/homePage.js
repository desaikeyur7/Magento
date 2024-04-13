class HomePage {
  getNavigationMenuItems(menuItem) {
    return cy
      .get(".category-item.level-top")
      .filter(`:contains("${menuItem}")`);
  }
}

export default new HomePage();
