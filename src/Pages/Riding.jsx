import React from "react";
import rules from '../assets/layouts/icons/rules.png'
const Conditions = () => {
    React.useEffect(() => {
        window.scrollTo(0,0)
      
      }, [])
  return (
    <section className="riding--container">
      <div className="riding--wrapper"></div>
      <div className="riding--container__text">
        <p>Особенности дорожного движения в РА</p>
      </div>
      <div className="riding--container_wrapper">
        <h3>Информация для арендатора</h3>
          <div className='riding--container__top'>
              <div className='riding--container__left'>
                  <ul className="rental-riding">
                      <li>Возраст от 21 года, стаж вождения от 2х лет. </li>
                      <li>
                          Максимальная скорость в пределах населенных пунктов, поселков,
                          деревнях – 60 км/ч, за пределами населенных пунктов, городов,
                          поселков, деревень – 90 км/ч, на скоростных трассах Армении 110 км/ч
                          допустимое превышение скорости – 10 км/ч, однако мы советуем
                          придерживаться указанного знаками ограничения скоростного режима.
                      </li>
                      <li>
                          В Армении очень много камер, следящих за соблюдением правил
                          дорожного движения: Превышение скоростных ограничений, пересечение
                          стоп линий, проезд по выделенным полосам движения общественного
                          транспорта, пересечение сплошных разделительных линий в т.ч.
                          разделяющих попутные полосы движения.
                      </li>
                      <li>
                          В Ереване действует система платных автостоянок, а также взыскания
                          штрафов за неуплату за парковку. Территории автостоянок на улицах
                          города помечаются красными линиями, обычно это центр города.{" "}
                          <a href="https://www.pcs.am/map/">
                              Официальный сайт и карта платных парковок.
                          </a>
                      </li>
                      <li>
                          Не смотря на то что в Армении очень много курят и делают это везде и часто, правилами дорожного движения запрещено курить за рулем, за это предусмотрена административная ответственность.
                      </li>
                      <li>
                          Алкоголь за рулем строго запрещен. Допустимый уровень алкоголя в крови составляет 0,0 %.
                      </li>
                      <li>
                          Дети до 12 лет должны сидеть на заднем ряду сидений.
                      </li>
                      <li>
                          Если отступить от ПДД, то хочется отметить как часто водители Армении используют звуковой сигнал автомобиля(клаксон,гудок и пр.). Звуковой сигнал может значить негодование, злость, приветствие или то,что водитель уступает вам дорогу. Сигналов в городе с плотным движением очень много, поэтому старайтесь помнить об этом и не переживать что вы сделали что-то не так :)
                      </li>
                      <li>
                          Любые нарушения правил дорожного движения в период аренды будут выписаны на арендатора и могу препятствовать пересечению Вами границы. <strong>Будьте осторожны и внимательны.</strong>
                      </li>
                  </ul>
                  <p>
                      Ниже приведены штрафы за превышение скоростного режима в РА. С остальными штрафами Вы можете ознакомиться <a href="https://haywiki.org/drive/fines.html ">по ссылке</a>
                  </p>
              </div>
              <div className="riding--law">
                  <img src={rules} alt="" />
                  <p>
                      В заключении хочется добавить, что в целом правила дорожного движения стандартные и не имеют ярковыраженных отличий от правил в других странах. Для управления автомобилем в Республике Армения достаточно просто уметь водить, быть внимательным и осторождным,в прочем, как и везде.

                  </p>
              </div>
          </div>
      </div>
      <div className="riding--slide--bg"></div>
    </section>
  );
};

export default Conditions;
