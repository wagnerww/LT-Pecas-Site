import React, { Fragment, useEffect } from "react"
import { graphql } from "gatsby"
import Slider from "react-slick"
import $ from "jquery"
import { MdKeyboardArrowUp } from "react-icons/md"

import "../styles/style.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import SEO from "../components/seo"

import LogoAmarela from "../assets/img/Logo.png"
import LogoBranca from "../assets/img/Logo_branca.png"
import QuemSomos from "../assets/img/IMG_QuemSomos.png"
import Facebook from "../assets/img/facebook.png"
import Instagran from "../assets/img/instagran.png"

import Case_Construction_logo from "../assets/img/logos/Case_Construction_logo.png"
import JCB from "../assets/img/logos/JCB.png"
import Volvo from "../assets/img/logos/Volvo-logo-2014-1920x1080.png"
import Catepilar from "../assets/img/logos/caterpillar-logo-cat.png"
import Hyundai from "../assets/img/logos/hyundai-logo.png"
import Komatsu from "../assets/img/logos/komatsu-logo.png"
import NewHolland from "../assets/img/logos/new-holland.png"
import Randon from "../assets/img/logos/randon_t.png"

var settings = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
}

export default function({ data }) {
  useEffect(() => {
    let $doc = $("html, body")
    $(".interno").click(function() {
      $doc.animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
      )
      return false
    })
  }, [])
  return (
    <Fragment>
      <SEO title="LT Peças" />
      <header>
        <div className="container-header">
          <nav id="menu">
            <img src={LogoAmarela} alt="Lt Peças" />
            <ul>
              <li>
                <a className="interno" href="#quem_somos">
                  Quem somos
                </a>
              </li>
              <li>
                <a className="interno" href="#pecas">
                  Peças
                </a>
              </li>
              <li>
                <a className="interno" href="#localizacao">
                  Localização
                </a>
              </li>
              <li>
                <a className="interno" href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <div></div>
          <section>
            <img src={LogoBranca} alt="LT Peças Logo" />
            <p>Toda linha de peças para máquinas rodoviárias</p>
          </section>
        </div>
        <Slider {...settings} className="container-marcas">
          <div>
            <img
              style={{ width: "200px" }}
              src={Case_Construction_logo}
              alt="LT Peças Case"
            />
          </div>
          <div>
            <img style={{ width: "200px" }} src={JCB} alt="" />
          </div>
          <div>
            <img style={{ width: "200px" }} src={Volvo} alt="LT Peças Volvo" />
          </div>
          <div>
            <img
              style={{ width: "150px" }}
              src={Catepilar}
              alt="LT Peças Catepillar"
            />
          </div>
          <div>
            <img
              style={{ width: "210px" }}
              src={Hyundai}
              alt="LT Peças Hyundai"
            />
          </div>
          <div>
            <img
              style={{ width: "210px" }}
              src={Komatsu}
              alt="LT Peças Komatsu"
            />
          </div>
          <div>
            <img
              style={{ width: "120px" }}
              src={NewHolland}
              alt="LT Peças New Holland"
            />
          </div>
          <div>
            <img
              style={{ width: "250px" }}
              src={Randon}
              alt="LT Peças Randon"
            />
          </div>
        </Slider>
      </header>
      <main>
        <div className="titulo-quem-somos" id="quem_somos">
          <h1>Quem somos</h1>
        </div>
        <div>
          <div className="bkg-quem-somos">
            <img src={QuemSomos} alt="LT Peças Quem somos" />
          </div>
          <section className="container-quem-somos">
            <article className="quem-somos">
              <p>
                &emsp;A empresa LT Peças é especializada na reposição de peças
                para maquinas rodoviárias, como pá-carregadeiras,
                motoniveladoras, escavadeiras hidráulicas, retroescavadeiras e
                rolo compactador.
                <br></br>
                <br></br>
                &emsp;Sua marca é levada atualmente pela terceira geração,
                sempre atuando no mercado com comprometimento e eficácia.{" "}
                <br></br>
                <br></br>&emsp;O slogan “Nossa motivação é a sua satisfação” não
                é uma simples estampa. A LT trabalha com ênfase na solução de
                problemas, independente das necessidades do cliente. Um
                comportamento simples e honroso, o qual destaca sua força,
                trabalho em equipe e seu comprometimento com clientes e
                parceiros.
              </p>
            </article>
            <article className="visao">
              <h2>Visão</h2>
              <p>
                &emsp;Ser reconhecida como a melhor opção em produtos e serviços
                para maquinas rodoviárias.
              </p>
            </article>
            <article className="missao">
              <h2>Missão</h2>
              <p>
                &emsp;Suprir com agilidade, seriedade e qualidade as
                necessidades de nossos clientes.
              </p>
            </article>
            <article className="valores">
              <h2>Valores</h2>
              <p>
                &emsp;Priorizar sempre o cliente, acolher colaboradores
                prestativos e honestos e trabalho em equipe.
              </p>
            </article>
          </section>
        </div>
        <section className="motivacao">
          <h1>“ NOSSA MOTIVAÇÃO É A SUA SATISFAÇÃO”</h1>
        </section>
        <section className="pecas" id="pecas">
          <div>
            <div className="fabricante">
              <p>“Trabalhamos com os principais fabricantes de peças.”</p>
            </div>
            <div className="fabricantes-container">
              <h1>Fabricante de peças</h1>
              <ul>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Retentores Corteco</p>
                </li>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Eixos e transmissões Dana</p>
                </li>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Motores Cummins, Iveco e Caterpillar</p>
                </li>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Rolamentos Timken, NTN e Koyo</p>
                </li>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Eixos e transmissões Carraro</p>
                </li>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Filtros Donaldson, Mahle e FLEETGUARD</p>
                </li>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Ferramentas para penetração de solo Ecoplan</p>
                </li>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Material rodante ITR</p>
                </li>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Reparos APC</p>
                </li>
                <li>
                  <div className="linha">
                    <div className="quadrado"></div>
                  </div>
                  <p>Discos Miba</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="localizacao-titulo">
          <div>
            <div>
              <h1>Localização</h1>
              <p>Rua Arnoldo Gassen, Alto do Parque, Número 82</p>
            </div>
            <div>
              <p>Santa Rosa - RS</p>
              <p>98900-000</p>
            </div>
          </div>
        </section>
        <section id="localizacao">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1711.1191446933015!2d-54.472771714282715!3d-27.84388324130452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f9367eda2c1835%3A0x7bbc4ad5288a76ca!2sR.+Arnaldo+Gassen+-+Gl%C3%B3ria%2C+Santa+Rosa+-+RS%2C+98900-000!5e0!3m2!1spt-BR!2sbr!4v1566263525629!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: "0" }}
          ></iframe>
        </section>
      </main>
      <footer>
        <section id="contato">
          <div>
            <img src={LogoAmarela} alt="LT Pecas" />
            <p>Peças para máquinas rodoviárias</p>
          </div>
          <div>
            <div>
              <p>Santa Rosa - RS</p>
            </div>
            <div>
              <a href="tel:55 99909-6266">55 99909-6266</a>
            </div>
            <div>
              <a target="_blank" href="mailto:atendimento.ltp@hotmail.com">
                atendimento.ltp@hotmail.com
              </a>
            </div>
            <div className="redes-sociais">
              <a target="_blank" href="faceook.com">
                <img src={Facebook} alt="Facebook LT Peças" />
              </a>
              <a target="_blank" href="instagran.com">
                <img src={Instagran} alt="Instagram LT Peças" />
              </a>
            </div>
          </div>
        </section>
        <section className="interface">
          <a href="https://innteface.com" target="_blank">
            Desenvolvido por INNTERFACE | 2019
          </a>
        </section>
      </footer>
      <div className="top">
        <a className="interno" href="#menu">
          <MdKeyboardArrowUp size={50} color="#000" />
        </a>
      </div>
    </Fragment>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
