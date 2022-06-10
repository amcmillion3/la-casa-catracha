import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Menu() {
    AOS.init();

    return(
        <div>
            <div className="flex justify-center bg-catracha-blue text-white border-t-4 border-b-4 border-solid border-black">
                <h1 className="text-4xl font-medium">MENU</h1>
            </div>                
            <div>
                <div className="flex justify-center" data-aos="fade-in fade-up">
                    <h2 className="flex justify-center bg-catracha-blue text-white mt-4 lg:mt-8 w-2/3 text-2xl font-medium">APERITIVOS</h2>
                </div>
                <div className="flex flex-col items-center" data-aos="fade-in fade-up">
                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold ">Fiesta Catracha</h4>
                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Tacos de pollo, baleada sencilla, empanadas, tajadas de guineo, friojoles fritos, queso fresco, y chimol</p>
                </div>
                <div>
                    <ul className="lg:grid lg:grid-cols-2" >
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Tacos de Pollo</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Honduran style chicken tacos, cabbage, tomato sauce, crumbled cheese, and chimol</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Enchiladas</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">3 Fried corn tortillas, ground beef, cabbage, house sauce, crumbled cheese, chimol</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Tortilla con Quesillo</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Corn tortilla cheese quesadilla, cabbage, tomato sauce, crumbled cheese, and chimol</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Catracha</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fried corn tortilla, refried beans, and crumbled cheese</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Papa Rellena</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Homemade Potato ball stuffed with ground beef</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Relleno de Cangrejo</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Homemade Deviled Crab</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Boquita Típica</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Carne asada, fried green bananas, fried cheese, chimol</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold  ">Croquetas</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fried Spanish Croquettes</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="flex justify-center" data-aos="fade-in fade-up">
                    <h2 className="flex justify-center text-center bg-catracha-blue text-white mt-4 lg:mt-8 w-2/3 text-2xl font-medium">SOPAS Y ENSALADAS</h2>
                </div>
                <div className="flex flex-col items-center" data-aos="fade-in fade-up">
                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sopa de Res</h4>
                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Homemade beef soup using Abuelitas delicious recipe (Todos los días)</p>
                </div>
                <div>
                    <ul className="lg:grid lg:grid-cols-2">
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sopa de Pollo</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Gomemade Chicken Soup (Miércoles y Jueves)</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sopa de Gallina</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Homemade Hen Soup (Lunes)</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sopa de Frijoles</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Homemade Red Bean Soup (Viernes)</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sopa de Mondongo</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Homemade Tripe Soup (Sabados)</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sopa de Caracol</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Homemade Conch Soup (Domingos)
                                <br/>*Traditional Honduran Chowder
                            </p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Catracha Chef Salad</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Lettuce, tomato, shredded cheese, hard-boiled egg, sliced ham, and sliced turkey</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center  w-2/3 text-xl mt-4 font-bold">Ensalada con Pechuga a la Plancha</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Grilled chicken, lettuce, tomato, onions, cucumbers, fresh cheese, and avocado</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Ensalada con Camarones a la Plancha</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Grilled shrimp, lettuce, tomato, grilled onions, cucumbers, and avocado</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="flex justify-center" data-aos="fade-in fade-up">
                    <h2 className="flex justify-center bg-catracha-blue text-white mt-4 lg:mt-8 w-2/3 text-2xl font-medium">SÁNDWICHES</h2>
                </div>
                <div>
                    <ul className="lg:grid lg:grid-cols-2">
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sándwich Cubano</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Ham, salami, roast pork, swiss cheese, mayonnaise, mustard, and pickles</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Media Noche</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Ham, salami, roast pork, swiss cheese, mayonnaise, mustard, and pickles</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sándwich de Bistec</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Steak, grilled onions, mayonnaise, lettuce, tomato, and potato sticks</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sándwich de Puerco</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Roast pork, grilled onions, mayonnaise, lettuce, tomato, and potato sticks</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Doña Rossina Sándwich</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Ham, turkey, bacon, swiss cheese, mayonnaise, lettuce, and tomato</p>
                        </li>
                        <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                            <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Pan con Croqueta</h4>
                            <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Ham croquettes, sliced hame, swiss cheese, mayonnaise, mustard, and ketchup</p>
                        </li>
                    </ul>
                    <div className="flex flex-col items-center" data-aos="fade-in fade-up">
                        <h4  className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">La Casa Catracha Sándwich</h4>
                        <p className="flex justify-center text-center w-2/3 mt-2 text-lg">House chicken, mayonnaise, lettuce, tomato, and French Fries</p>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2">
                <div>
                    <div className="flex justify-center" data-aos="fade-in fade-up">
                        <h2 className="flex justify-center bg-catracha-blue text-white mt-4 lg:mt-8 w-2/3 text-2xl font-medium">DESAYUNOS</h2>
                    </div>
                    <div>
                        <ul>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Desayuno Típico</h4> 
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Traditional Honduran breakfast. 2 Eggs, refried beans, Honduran cheese, crema, and tortillas
                                    Add carne asada and avocado
                                </p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Baleadas</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Flour tortilla folded in half filled with breakfast items</p>
                                <ul>
                                    <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                        <h5 className="flex justify-center text-center w-2/3 text-xl mt-4 font-medium">Sencilla</h5>
                                        <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Refried beans, crema, and crumbled cheese</p>
                                    </li>
                                    <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                        <h5 className="flex justify-center text-center w-2/3 text-xl mt-4 font-medium">Con Huevo</h5>
                                        <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Refried beans, crema, crumbled cheese, and scrambled eggs</p>
                                    </li>
                                    <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                        <h5 className="flex justify-center text-center w-2/3 text-xl mt-4 font-medium">Con Todo</h5>
                                        <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Refried beans, crema, crumbled cheese, scrambled eggs, carne asada, and avocado</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center" data-aos="fade-in fade-up">
                        <h2 className="flex justify-center bg-catracha-blue text-white mt-4 lg:mt-8 w-2/3 text-2xl font-medium">PLATOS HONDUREÑOS</h2>
                    </div>
                    <div>
                        <ul>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Yuca con Chicharrón</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Cassava, pork rinds, cabbage, tomato sauce, and chimol</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Yuca con Pata</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Cassava, pig feet, cabbage, tomato sauce, and chimol</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Pastelitos</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">3 Corn empanadas filled with ground beef and rice served with cabbage, red sauce, and chimol</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Tajadas al Estilo Ceiba</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fried green bananas, cabbage, red sauce, house dressing, encurtido your choice of meat
                                    Pollo Frito | Carne Asada | Chuleta | Carne Molida
                                </p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Tajadas al Estilo Honduras</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fried green bananas, cabbage, red sauce, chimol, and your choice of meat
                                    Pollo Frito | Carne Asada | Chuleta | Carne Molida
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center" data-aos="fade-in fade-up">
                        <h2 className="flex justify-center bg-catracha-blue text-white mt-4 lg:mt-8 w-2/3 text-2xl font-medium">ALMUERZO Y CENA</h2>
                    </div>
                    <div>
                        <ul>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Pargo Rojo Frito</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fried Red Snapper served with 3 side items.</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Camarones Enchilados</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Shrimp served in a spicy sauce with 3 side items</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Camarones al Ajillo</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Shrimp served in a garlic sauce with 3 side items</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Camarones a la Plancha</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Grilled Shrimp accompanied by 3 side items</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Camarones Empanizados</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Breaded Shrimp accompanied by 3 side items</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Filete de Pescado</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Tilapia Fillet accompanied by 3 side items</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Carne Asada</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Flame grilled steak served with 3 side items</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Carnes a la Plancha</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Your choice of meat accompanied by 3 side items
                                    Pechuga | Bistec | Chuleta
                                </p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Carnes Encebolladas</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Your choice of meat and grilled onions with 3 side items
                                    Pechuga | Bistec | Chuleta
                                </p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Carnes Guisadas</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Meats stewed in tomato sauce, onion, and green peppers
                                    Pechuga | Bistec | Chuleta
                                </p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Pollo Frito</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fried Chicken accompanied by 3 side items</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Puerco Asado</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Roast Pork accompanied by 3 side items</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Carne Molida | Picadillo</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Seasoned ground beef accompanied by 3 side items</p>
                            </li>
                            <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Pollo Fricase</h4>
                                <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Stewed chicken and potatoes accompanied by your choice of 3 side items</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="flex justify-center" data-aos="fade-in fade-up">
                            <h2 className="flex justify-center bg-catracha-blue text-white mt-4 lg:mt-8 w-2/3 text-2xl font-medium">ACOMPAÑANTES</h2>
                        </div>
                        <div>
                            <ul className="lg:grid lg:grid-cols-2">
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Arroz</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">White or Yello Rice</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Tostones | Maduros</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fried green or Sweet Plantain</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Frijoles</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Red, Black, or Refried</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Papas Fritas</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">French Fries</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Tajadas de Guineo</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fried Green Banasas</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Queso Fresco</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fresh Honduran Cheese</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Ensalada de Repollo | Lechuga</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Side Cabbage or Lettuce Salad</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Aguacate</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Sliced Avocado</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Yuca Frita | Hervida</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Cassava Fried or Boiled</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Totillas Hechas a Mano</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Handmade corn or flour tortillas</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center" data-aos="fade-in fade-up">
                            <h2 className="flex justify-center bg-catracha-blue text-white mt-4 lg:mt-8 w-2/3 text-2xl font-medium">POSTRES</h2>
                        </div>
                        <div>
                            <ul className="lg:grid lg:grid-cols-2">
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Arroz con Leche</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Rice Pudding</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Tres Leche</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">3 Milk Cake</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Flan de Vainilla</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Vanilla Flan</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Taco Dulce</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Sweet taco, vanilla ice cream, whipped cream, and chocolate syrup</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center" data-aos="fade-in fade-up">
                            <h2 className="flex justify-center bg-catracha-blue text-white mt-4 lg:mt-8 w-2/3 text-2xl font-medium">BEBIDAS</h2>
                        </div>
                        <div>
                            <ul className="lg:grid lg:grid-cols-2">
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Jugos Naturales</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Natural fruit juices</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Café Cubano</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Cuban Coffee</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sodas Latinas</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Latin Sodas</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Café con Leche</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Coffee with milk</p>
                                </li>
                                <li className="flex flex-col items-center" data-aos="fade-in fade-up">
                                    <h4 className="flex justify-center text-center w-2/3 text-xl mt-4 font-bold">Sodas de Maquina</h4>
                                    <p className="flex justify-center text-center w-2/3 mt-2 text-lg">Fountain Drink</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;