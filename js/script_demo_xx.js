function showdemo(week) {
    const p = document.querySelector('.show-classdemo');
    console.log('p', p);
    switch (week) {
        case 1:
            p.innerHTML = `<iframe src="./demo/w01_dom_90/index.html" width="100%" height="100%" />`;
            break;
        case 2:
            p.innerHTML = `<iframe src="./demo/w02_tictactoe_90/tictactoe.html" width="100%" height="100%" />`;
            break;
        case 3:
            p.innerHTML = `<iframe src="./demo/w03_basic_90/p2_90/p2_90.html" width="100%" height="100%" />`;
            break;
        case 4:
            p.innerHTML = `<iframe src="./demo/w03_reviews/index.html" width="100%" height="100%" />`;
            break;
        case 5:
            p.innerHTML = `<iframe src="./demo/w04_basics_90/p5_xx/p5_xx.html" width="100%" height="100%" />`;
            break;
        case 6:
            p.innerHTML = `<iframe src="./demo/w06_task_90/w06_menu_90/index.html" width="100%" height="100%" />`;
            break;
        case 7:
            p.innerHTML = `<iframe src="./demo/w13_90/menuSupa.html" width="100%" height="100%" />`;
            break;
        case 8:
            p.innerHTML = `<iframe src="./demo/w15_cocktaildb/cocktaildb_90/index.html" width="100%" height="100%" />`;
            break;
        case 9:
            p.innerHTML = `<iframe src="./demo/w15_products_90/products_supa_xx.html" width="100%" height="100%" />`;
            break;
    }
}