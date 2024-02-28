import { Injectable } from '@angular/core';
import { Produit } from '../interface/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor() { }

  produit: Array<Produit> = [
    { uuid: "48d0e776-6b3a-4d61-98c1-2fb3028b70a1", 
      name: "Advance GTA 250 (AZERTY Français)", 
      description: "L'Advance RGB GTA 250 est un superbe clavier gaming avec des touches rétro-éclairées gravées au laser et faciles à repérer. Il est idéal lorsque vous jouez dans des conditions de faible éclairage ou dans l'obscurité. Il s'illumine avec un rétro-éclairage 'rainbow' composé de 7 couleurs.", 
      type: "Clavier", 
      imageProduit1: "../../../assets/clavier/advanceGTA250/LD0005530946_2.jpg", 
      imageProduit2: "../../../assets/clavier/advanceGTA250/LD0005530951_2.jpg", 
      imageProduit3: "../../../assets/clavier/advanceGTA250/LD0005530956_2.jpg", 
      prix: 25, 
      delayLivraison: 2, 
      isVisible: true },
    { uuid: "efc09587-cc23-4b16-b534-dc1b015a2f0e", 
      name: "Advance GTA 230 (AZERTY Français)", 
      description: "L'Advance RGB GTA 230 est un clavier gaming conçu pour que vous puissiez vous dépasser lors de toutes vos sessions gaming intenses. Il est doté de touches rétro-éclairées gravées au laser, faciles à repérer dans des conditions de faible éclairage ou dans l'obscurité.", 
      type: "Clavier", 
      imageProduit1: "../../../assets/clavier/advanceGTA230/LD0005601775_2.jpg", 
      imageProduit2: "../../../assets/clavier/advanceGTA230/LD0005601785_2.jpg", 
      imageProduit3: "../../../assets/clavier/advanceGTA230/LD0005601795_2.jpg", 
      prix: 19.94, 
      delayLivraison: 4, 
      isVisible: true  },
    { uuid: "2efb24f6-502b-49b4-884e-1c23c3bb9a26", 
      name: "ASUS ROG Claymore II", 
      description: "Ne laissez aucune chance à vos adversaires avec le ASUS ROG Claymore II. Ce clavier filaire ou sans fil est doté de commutateurs mécaniques optiques rouges ROG RX qui offrent une sensation fluide et linéaire pour vous donner une réponse quasi instantanée au moment où vous appuyez sur la touche.", 
      type: "Clavier", 
      imageProduit1: "../../../assets/clavier/asusROGClaymoreII/LD0005828776_1.jpg", 
      imageProduit2: "../../../assets/clavier/asusROGClaymoreII/LD0005828777_1.jpg", 
      imageProduit3: "../../../assets/clavier/asusROGClaymoreII/LD0005828779_1.jpg", 
      prix: 19.94, 
      delayLivraison: 4, 
      isVisible: true  },
    { uuid: "725de77e-9d9b-4e1c-b1c4-5824b4f618c5", 
      name: "ASUS ROG Falchion RX Low Profile (Blanc)", 
      description: "Facilitez-vous la victoire grâce au clavier ASUS ROG Falchion RX Low Profile. Avec son format compact, seulement 65% d'un clavier traditionnel, il dit adieu au surplus des autres claviers en gardant uniquement l'essentiel pour vous permettre de remporter de nombreuses batailles.", 
      type: "Clavier", 
      imageProduit1: "../../../assets/clavier/asusROGFalchionRXLowProfileBlanc/LD0006101073.jpg", 
      imageProduit2: "../../../assets/clavier/asusROGFalchionRXLowProfileBlanc/LD0006101074.jpg", 
      imageProduit3: "../../../assets/clavier/asusROGFalchionRXLowProfileBlanc/LD0006101077.jpg", 
      prix: 189.94, 
      delayLivraison: 2, 
      isVisible: true  },

    { uuid: "1a289892-7b97-4683-ba46-174e4a4d556f", 
      name: "Logitech MX Master 3S (Graphite)", 
      description: "Avec la Logitech MX Master 3S, profitez d'une icône remasterisée offrant une précision instantanée et un potentiel infini. Conçue pour offrir précision, contrôle et confort aux utilisateurs expérimentés, la souris sans fil Logitech MX Master 3S va vite devenir indispensable à votre quotidien.", 
      type: "Souris", 
      imageProduit1: "../../../assets/souris/logitechMXMaster3s/LD0005957533.jpg", 
      imageProduit2: "../../../assets/souris/logitechMXMaster3s/LD0005970606.jpg", 
      imageProduit3: "../../../assets/souris/logitechMXMaster3s/LD0006011065.jpg", 
      prix: 119.95, 
      delayLivraison: 3, 
      isVisible: true  },
    { uuid: "4b7a5dd7-9019-4638-abe5-8cb41978c2d0", 
      name: "Logitech Wireless Mouse M185 (Bleu)", 
      description: "Vous recherchez une souris simple, fiable et dotée de la technologie sans fil prête à l'emploi? La Logitech Wireless Mouse M185 est faite pour vous ! Profitez de la fiabilité d'un dispositif filaire, mais avec la liberté et la commodité de la technologie sans fil.", 
      type: "Souris", 
      imageProduit1: "../../../assets/souris/logitechWirelessMouseM185/LD0005897038_1.jpg", 
      imageProduit2: "../../../assets/souris/logitechWirelessMouseM185/LD0005897040_1.jpg", 
      imageProduit3: "../../../assets/souris/logitechWirelessMouseM185/LD0005897042_1.jpg", 
      prix: 16.95, 
      delayLivraison: 2, 
      isVisible: true  },
    { uuid: "a80f4913-8e07-4fd2-8b43-836f0e78a963", 
      name: "Logitech MX Vertical", 
      description: "Avec son design né de la science et des performances élevées de la série MX de Logitech, la souris MX Vertical est une souris ergonomique conçue pour offrir précision, contrôle et confort aux utilisateurs expérimentés.", 
      type: "Souris", 
      imageProduit1: "../../../assets/souris/logitechMXVertical/LD0005882621_1.jpg", 
      imageProduit2: "../../../assets/souris/logitechMXVertical/LD0005882622_1.jpg", 
      imageProduit3: "../../../assets/souris/logitechMXVertical/LD0005882623_1.jpg", 
      prix: 119, 
      delayLivraison: 5, 
      isVisible: true  },
    { uuid: "fefb2e4d-5f26-4b30-9ff4-0a369b26c574", 
      name: "Logitech M171 Wireless Mouse (Rose)", 
      description: "Grâce à la souris Logitech M171 Wireless Mouse, profitez de la fiabilité d'un dispositif filaire, mais avec la liberté et la commodité d'une connexion sans fil d'une portée de 10 mètres grâce à la technologie sans fil 2,4 GHz de pointe Logitech.", 
      type: "Souris", 
      imageProduit1: "../../../assets/souris/logitechM171WirelessMouse/LD0006007290.jpg", 
      imageProduit2: "../../../assets/souris/logitechM171WirelessMouse/LD0006028514.jpeg", 
      imageProduit3: "../../../assets/souris/logitechM171WirelessMouse/LD0006028515.jpeg", 
      prix: 15.95, 
      delayLivraison: 2, 
      isVisible: true  },

    { uuid: "d1fc56db-1a0c-4910-ba41-93d6b3b649f8", 
      name: "Acer 23.8\" LED - KA240YHbi", 
      description: "Bénéficiez de conditions optimales au quotidien en installant le moniteur Acer KA242Ybi dans votre environnement. Ce modèle Full HD dévoile des couleurs naturelles et un contraste supérieur grâce à sa dalle IPS de 23.8 pouces tout en proposant des qualités gaming efficaces (1 ms, 75 Hz, FreeSync).", 
      type: "Ecran", 
      imageProduit1: "../../../assets/ecran/acer238LED/LD0006050299.jpg", 
      imageProduit2: "../../../assets/ecran/acer238LED/LD0006050300.jpg", 
      imageProduit3: "../../../assets/ecran/acer238LED/LD0006050302.jpg", 
      prix: 84.95, 
      delayLivraison: 3, 
      isVisible: true  },
    { uuid: "78c2206e-342d-4968-a53f-4a5881910077", 
      name: "AOC 23.8\" LED - 24G2SPAE", 
      description: "Avec le moniteur gaming AOC 24G2SPAE, vous bénéficiez d'un environnement de jeu pour atteindre les sommets ! Image Full HD sur une dalle IPS de 24\", 165 Hz, 1 ms et Adaptive Sync, toutes les conditions sont réunies pour garantir fluidité, performances visuelles supérieures et confort immédiat.", 
      type: "Ecran", 
      imageProduit1: "../../../assets/ecran/AOC27LED/LD0005674275_1.jpg", 
      imageProduit2: "../../../assets/ecran/AOC27LED/LD0005674276_1.jpg", 
      imageProduit3: "../../../assets/ecran/AOC27LED/LD0005674279_1.jpg", 
      prix: 169.95, 
      delayLivraison: 5, 
      isVisible: true  },
    { uuid: "e83f5aeb-d151-4f16-a6de-6a4d5c488f0d", 
      name: "Samsung 27\" LED - Odyssey G5 C27G55TQBU", 
      description: "Partez à la conquête de succès futurs avec l'écran gaming Samsung Odyssey G5 C27G55TQBU ! Offrant des performances élevées, une immersion supérieure et un confort permanent, ce modèle vous assurera des conditions rêvées pour atteindre les sommets dans vos jeux préférés.", 
      type: "Ecran", 
      imageProduit1: "../../../assets/ecran/samsum27LED/LD0006011696.jpg", 
      imageProduit2: "../../../assets/ecran/samsum27LED/LD0006011697.jpg", 
      imageProduit3: "../../../assets/ecran/samsum27LED/LD0006011699.jpg", 
      prix: 259.69, 
      delayLivraison: 4, 
      isVisible: true  },
    { uuid: "043b79ac-273e-49a3-9273-09c081c9299e", 
      name: "AOC 27\" LED - C27G2ZE", 
      description: "Préparez-vous pour les échéances à venir en intégrant dans votre arsenal le moniteur AOC C27G2ZE ! Ce modèle incurvé 240 Hz à dalle VA de 27 pouces se dote d'un temps de réponse ultra-rapide de 0.5 ms, du FreeSync Premium et d'une connectique complète.", 
      type: "Ecran", 
      imageProduit1: "../../../assets/ecran/AOC238LED/LD0005961716.jpg", 
      imageProduit2: "../../../assets/ecran/AOC238LED/LD0005961717.jpg", 
      imageProduit3: "../../../assets/ecran/AOC238LED/LD0005961719.jpg", 
      prix: 224.95, 
      delayLivraison: 8, 
      isVisible: true  },

    { uuid: "a2542a0d-cfb8-41d8-9ae8-9e6a15607d1e", 
      name: "ASRock AMD Radeon RX 6600 Challenger D 8GB", 
      description: "Basée sur l'architecture AMD RDNA 2 et prenant en charge le ray tracing, la carte graphique ASRock AMD Radeon RX 6600 Challenger D 8GB vous propose de jouer dans les meilleures conditions avec des graphismes sublimes et une fluidité remarquable. C'est la carte graphique idéale pour jouer en Full HD.", 
      type: "Carte graphique", 
      imageProduit1: "../../../assets/carte-graphique/ASRockAMDRadeonRX6600/LD0005896909_1.jpg", 
      imageProduit2: "../../../assets/carte-graphique/ASRockAMDRadeonRX6600/LD0005896910_1.jpg", 
      imageProduit3: "../../../assets/carte-graphique/ASRockAMDRadeonRX6600/LD0005896911_1.jpg", 
      prix: 249.95, 
      delayLivraison: 3, 
      isVisible: true  },
    { uuid: "6e28986b-5983-4321-b3ec-aa2d940ad221", 
      name: "ASRock AMD Radeon RX 7900 XTX Taichi White 24GB OC", 
      description: "Basée sur l'architecture RDNA 3, la carte graphique ASRock AMD Radeon RX 7900 XTX Taichi White 24GB OC est conçue pour le Jeu en 4K UHD. Puissante et efficace, elle ravira joueurs et créatifs à la recherche d'une solution graphique performante et novatrice.", 
      type: "Carte graphique", 
      imageProduit1: "../../../assets/carte-graphique/asRockAMDRadeonRX7900/LD0006057933.jpg", 
      imageProduit2: "../../../assets/carte-graphique/asRockAMDRadeonRX7900/LD0006057934.jpg", 
      imageProduit3: "../../../assets/carte-graphique/asRockAMDRadeonRX7900/LD0006057936.jpg", 
      prix: 1199.95, 
      delayLivraison: 5, 
      isVisible: true  },
    { uuid: "d3684f5a-3e62-49c5-9f82-52c3a9384da8", 
      name: "ASUS Dual Radeon RX 7700 XT O12G", 
      description: "L'architecture RDNA 3 d'AMD vous propulse dans le monde du jeu vidéo de manière unique et spectaculaire avec la carte graphique ASUS Dual Radeon RX 7700 XT O12G. Elle est parfaite pour le jeu en 1440p tout en étant capable d'offrir de bonnes performances en 4K.", 
      type: "Carte graphique", 
      imageProduit1: "../../../assets/carte-graphique/asusDualRadeonRX7700/LD0006093385.jpg", 
      imageProduit2: "../../../assets/carte-graphique/asusDualRadeonRX7700/LD0006093386.jpg", 
      imageProduit3: "../../../assets/carte-graphique/asusDualRadeonRX7700/LD0006093387.jpg", 
      prix: 539.93, 
      delayLivraison: 10, 
      isVisible: true  },
    { uuid: "f0b151f1-4ef2-426a-8c6f-97dd2edfc43d", 
      name: "ASUS PH-RX550-4G-EVO", 
      description: "La carte graphique Asus PH-RX550-4G-EVO est idéale pour les jeux en ligne (League of Legends, Overwatch, Rocket League, Counter Strike ...) et les \"casual gamers\" à la recherche d'une solution \"Gaming\" abordable et efficace. Elle vous permettra de profiter des derniers Hits PC de manière fluide.", 
      type: "Carte graphique", 
      imageProduit1: "../../../assets/carte-graphique/asusPHRX5504GEvo/LD0005767307_1.jpg", 
      imageProduit2: "../../../assets/carte-graphique/asusPHRX5504GEvo/LD0005767310_1.jpg", 
      imageProduit3: "../../../assets/carte-graphique/asusPHRX5504GEvo/LD0005767311_1.jpg", 
      prix: 119.95, 
      delayLivraison: 10, 
      isVisible: true  }
  ]
}