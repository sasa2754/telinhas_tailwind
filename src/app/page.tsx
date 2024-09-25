import Image from "next/image";

import capa from '../img/capa_musica.webp';
import seta from '../img/icon/seta.png';
import menu from '../img/icon/menu.png';
import coracao from '../img/icon/coracao.png';
import play from '../img/icon/play.png';
import proximo from '../img/icon/proximo.png';
import anterior from '../img/icon/anterior.png';
import aleatorio from '../img/icon/aleatorio.png';
import repetir from '../img/icon/repetir.png';
import computador from '../img/icon/computador.png';
import share from '../img/icon/compartilhar.png';
import lista from '../img/icon/lista.png';

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-fuchsia-800 from-10% to-slate-800 to-70% p-5 h-screen w-full flex flex-col justify-center">
        
        {/* Parte de cima */}
        <div className="flex flex-row justify-between items-center">
          <Image className="pb-10 w-5 pt-5" src={seta} alt="seta"/>
          <div className="text-white flex items-center flex-col">
            <h3>Playing from playlist</h3>
            <h5>Daily Drive</h5>
          </div>
          <Image className="pb-10 w-5 pt-5" src={menu} alt="menu"/>
        </div>

        {/* Capa da música */}
        <Image className="max-w-96 w-full pb-14 pt-12 m-auto" src={capa} alt="imagem da capa"/>

        {/* Nome da música e coração */}
        <div className="flex flex-row justify-between items-center pb-10">
          <div className="flex flex-col">
            <h1 className="text-white text-xl">Disconnected</h1>
            <h2 className="text-neutral-400">Vinicio</h2>
          </div>
          <Image className="w-8" src={coracao} alt="imagem do like"/>
        </div>

        {/* Barrinha de progresso */}
        <div className="flex flex-col justify-center pb-2">
          <div className="w-2 h-2 rounded-full bg-neutral-400 absolute left-10"></div>
          <div className="w-50 h-0.5 bg-neutral-400"></div>
        </div>
        <div className="text-neutral-400 flex flex-row items-center justify-between pb-3">
          <h6>0:06</h6>
          <h6>5:26</h6>
        </div>

        {/* Botões */}
        <div className="flex flex-row justify-between items-center pb-5">
        <Image className="w-8 h-8" src={aleatorio} alt="imagem do play"/>
          <div className="flex flex-row items-center justify-between w-56">
            <Image className="w-10" src={anterior} alt="imagem do play"/>
            <Image className="w-20" src={play} alt="imagem do play"/>
            <Image className="w-10" src={proximo} alt="imagem do play"/>
          </div>
          <Image className="w-8 h-8" src={repetir} alt="imagem do play"/>
        </div>

        <div className="flex flex-row justify-between items-center">
          <Image className="w-10 h-10" src={computador} alt="imagem do play"/>
          <div className="flex flex-row gap-3 items-center">
            <Image className="w-8 h-8" src={share} alt="imagem do play"/>
            <Image className="w-12 h-12" src={lista} alt="imagem do play"/>
          </div>
        </div>
      </section>

    </>
 
  );
}
