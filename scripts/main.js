import { CustomOrders } from "./CustomOrders.js";
import { InteriorOptions } from "./Interiors.js";
import { OrderButton } from "./OrderButton.js";
import { PaintOptions } from "./Paints.js";
import { TechsOptions } from "./Technologies.js";
import { WheelsOptions } from "./Wheels.js";

const container = document.querySelector("#container");

const render = async () => {
  const paintOptionHTML = await PaintOptions();
  const interiorOptionHTML = await InteriorOptions();
  const techOptionHTML = await TechsOptions();
  const wheelOptionHTML = await WheelsOptions();
  const orderButton = OrderButton();
  const ordersHTML = await CustomOrders();

  const applicationHTML = `
        <h1>Cars 'R Us</h1>
        
        <h2>Cars 'R Us: Personal Car Building</h2>
        <article class="choices">
            <section class="choices_paints">
                <h3 class="choices_header">Paints</h3>
                ${paintOptionHTML}
            </section>
    
            <section class="choices_interiors">
                <h3 class="choices_header">Interior</h3>
                ${interiorOptionHTML}
            </section>
    
            <section class="choices_wheels">
                <h3 class="choices_header">Wheels</h3>
                ${wheelOptionHTML}
            </section>
    
            <section class="choices_technologies">
                <h3 class="choices_header">Technologies</h3>
                ${techOptionHTML}
            </section>
        </article>
    
        <article class="placeOrder">
        ${orderButton}
        <div class="error_message"></div>
        </article>
    
        <article class="custom_orders">
            <h2 class="header_orders">Custom Car Orders</h2>
            ${ordersHTML}
        </article>
    `;

  container.innerHTML = applicationHTML;
};

document.addEventListener("newOrderPlaced", (event) => {
  render();
});

render();
