const container = document.querySelector("#container");

const applicationHTML = `
    <h1>Cars 'R Us</h1>
    
    <h2>Cars 'R Us: Personal Car Building</h2>
    <article class="choices">
        <section class="choices_paints">
            <h3>Paints</h3>
        </section>

        <section class="choices_interiors">
            <h3>Interior</h3>
        </section>

        <section class="choices_wheels">
            <h3>Wheels</h3>
        </section>

        <section class="choices_technologies">
            <h3>Technologies</h3>
        </section>
    </article>

    <article class="placeOrder">
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
    </article>
`;

container.innerHTML = applicationHTML;
