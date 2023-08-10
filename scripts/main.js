import { InteriorOptions } from "./Interiors.js";
import { PaintOptions } from "./Paints.js";
import { TechnologiesOptions } from "./Technologies.js";
import { WheelsOptions } from "./Wheels.js";

const container = document.querySelector("#container");

const render = async () => {
  const paintOptionHTML = await PaintOptions();
  const interiorOptionHTML = await InteriorOptions();
  const technologyOptionHTML = await TechnologiesOptions();
  const wheelOptionHTML = await WheelsOptions();

  const applicationHTML = `
        <h1 class="body_header">Cars 'R Us</h1>
        
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
                ${technologyOptionHTML}
            </section>
        </article>
    
        <article class="placeOrder">
        </article>
    
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
        </article>
    `;

  container.innerHTML = applicationHTML;
};

render();
