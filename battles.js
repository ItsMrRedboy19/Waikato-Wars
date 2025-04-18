const battles = {
    Wairau: {
      coords: [-41.427844312794825, 173.9591706976383],
      info: `<div class="popup-content">
              <h3>The Wairau Affray</h3>
              <img src="https://images.ctfassets.net/pwv49hug9jad/2XmxtFHG8QPNoT4SgQ3gfO/2ed48a0dcac6fbecb40a2af2adb80e0c/wairau-april-1851-atl-744-2020.jpg?fm=webp" alt="Wairau" />
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/HekeFlagstaff.jpg/390px-HekeFlagstaff.jpg" style="display: block; margin-bottom: 15px;">Source: Wikimedia Commons</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/wairau.html')">Learn more</a>
            </div>`
    },
    Kororareka: {
      coords: [-35.263642903151045, 174.12197907166885],
      info: `<div class="popup-content">
              <h3>Flagpole Cut Down</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/HekeFlagstaff.jpg/390px-HekeFlagstaff.jpg" alt="Russell" />
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/HekeFlagstaff.jpg/390px-HekeFlagstaff.jpg" style="display: block; margin-bottom: 15px;">Source: Wikimedia Commons</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/kororareka.html')">Learn more</a>
            </div>`
    },
    Puketutu: {
      coords: [-35.33873644832787, 173.8173143049554],
      info: `<div class="popup-content">
              <h3>Battle of Puketutu</h3>
              <img src="https://teara.govt.nz/files/36898-atl.jpg" alt="Battle of Puketutu">
              <a href="https://teara.govt.nz/files/36898-atl.jpg" style="display: block; margin-bottom: 15px;">Source: Te Ara Encyclopedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/puketutu.html')">Learn more</a>
          </div>`
    },
    Ohaeawai: {
      coords: [-35.37555258686437, 173.85538167222242],
      info: `<div class="popup-content">
              <h3>Battle of Ohaeawai</h3>
              <img src="https://nzhistory.govt.nz/sites/default/files/styles/wide/public/images/ohaeawai-pa.jpg?itok=4gH524M0" alt="Battle of Ohaeawai">
              <a href="https://nzhistory.govt.nz/sites/default/files/styles/wide/public/images/ohaeawai-pa.jpg?itok=4gH524M0" style="display: block; margin-bottom: 15px;">Source: NZ History</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/ohaeawai.html')">Learn more</a>
          </div>`
    },
    Ruapekapeka: {
      coords: [-35.456389, 174.143611],
      info: `<div class="popup-content">
              <h3>Battle of Ruapekapeka</h3>
              <img src="https://static.wixstatic.com/media/836e27_0d85ba0cf76a49c68948a4de47acbf98~mv2.png/v1/fill/w_740,h_457,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/836e27_0d85ba0cf76a49c68948a4de47acbf98~mv2.png" alt="Battle of Ruapekapeka">
              <a href="https://static.wixstatic.com/media/836e27_0d85ba0cf76a49c68948a4de47acbf98~mv2.png/v1/fill/w_740,h_457,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/836e27_0d85ba0cf76a49c68948a4de47acbf98~mv2.png" style="display: block; margin-bottom: 15px;">Source: Royal Marines History</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/ruapekapeka.html')">Learn more</a>
          </div>`
    },
    Battle_Hill: {
      coords: [-41.051978, 174.93747],
      info: `<div class="popup-content">
              <h3>Battle of Battle Hill</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_fight_at_Battle_Hill%2C_Horokiwi%2C_6th_August%2C_1846%2C_oil_on_canvas_by_George_Hyde_Page.jpg/300px-The_fight_at_Battle_Hill%2C_Horokiwi%2C_6th_August%2C_1846%2C_oil_on_canvas_by_George_Hyde_Page.jpg" alt="Battle of Battle Hill">
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_fight_at_Battle_Hill%2C_Horokiwi%2C_6th_August%2C_1846%2C_oil_on_canvas_by_George_Hyde_Page.jpg/300px-The_fight_at_Battle_Hill%2C_Horokiwi%2C_6th_August%2C_1846%2C_oil_on_canvas_by_George_Hyde_Page.jpg" style="display: block; margin-bottom: 15px;">Source: Wikipedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/battle_hill.html')">Learn more</a>
          </div>`
    },   
    Waireka: {
      coords: [-39.09240359, 174.00530270],
      info: `<div class="popup-content">
              <h3>Battle of Waireka</h3>
              <img src="https://nzhistory.govt.nz/sites/default/files/styles/wide/public/images/waireka-cowan.jpg?itok=uY_u_jh3" alt="Battle of Waireka">
              <a href="https://nzhistory.govt.nz/sites/default/files/styles/wide/public/images/waireka-cowan.jpg?itok=uY_u_jh3" style="display: block; margin-bottom: 15px;">Source: NZ History</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/waireka.html')">Learn more</a>
          </div>`
    },
    Puketakauere: {
      coords: [-39.01651453, 174.23017290],
      info: `<div class="popup-content">
              <h3>Battle of Puketakauere</h3>
              <img src="https://nzhistory.govt.nz/sites/default/files/styles/nzhistory_thumbnail_portrait/public/images/taranaki-war-icon.jpg" alt="Battle of Puketakauere">
              <a href="https://nzhistory.govt.nz/sites/default/files/styles/nzhistory_thumbnail_portrait/public/images/taranaki-war-icon.jpg" style="display: block; margin-bottom: 15px;">Source: NZ History</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/puketakauere.html')">Learn more</a>
          </div>`
    },
    Meremere: {
      coords: [-37.314581453444646, 175.06959442482025],
      info: `<div class="popup-content">
              <h3>Withdraw from Meremere Pā</h3>
              <img src="https://thumbnailer.digitalnz.org/?resize=770x&src=https%3A%2F%2Fteara.govt.nz%2Ffiles%2Fp14694atl.jpg&resize=368%253E" alt="Withdraw from Meremere Pa">
              <a href="https://thumbnailer.digitalnz.org/?resize=770x&src=https%3A%2F%2Fteara.govt.nz%2Ffiles%2Fp14694atl.jpg&resize=368%253E" style="display: block; margin-bottom: 15px;">Source: DigitalNZ</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/meremere.html')">Learn more</a>
          </div>`
    },
    Rangiriri: {
      coords: [-37.42724554117184, 175.1294155082313],
      info: `<div class="popup-content">
              <h3>Battle of Rangiriri</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/The_repulse_of_the_royal_navy_storming_party_rangiriri_pa.jpg" alt="Battle of Rangiriri">
              <a href="https://upload.wikimedia.org/wikipedia/commons/a/a2/The_repulse_of_the_royal_navy_storming_party_rangiriri_pa.jpg" style="display: block; margin-bottom: 15px;">Source: Wikipedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/rangiriri.html')">Learn more</a>
          </div>`
    },
    Ngaruawahia: {
      coords: [-37.66842602, 175.14693170],
      info: `<div class="popup-content">
              <h3>Battle of Ngāruawāhia</h3>
              <img src="https://teara.govt.nz/files/36919-ap.jpg" alt="Battle of Ngaruawahia">
              <a href="https://teara.govt.nz/files/36919-ap.jpg" style="display: block; margin-bottom: 15px;">Source: Te Ara Encyclopedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/ngaruawahia.html')">Learn more</a>
          </div>`
    },
    Rangiaowhia: {
      coords: [-38.01716252, 175.37891040],
      info: `<div class="popup-content">
              <h3>The Fight at Rangiaowhia</h3>
              <img src="https://nzhistory.govt.nz/sites/default/files/styles/wide/public/images/waikato-wars-2.jpg?itok=CwI5IEWw" alt="The Fight at Rangiaowhia">
              <a href="https://nzhistory.govt.nz/sites/default/files/styles/wide/public/images/waikato-wars-2.jpg?itok=CwI5IEWw" style="display: block; margin-bottom: 15px;">Source: NZ History</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/rangiaowhia.html')">Learn more</a>
          </div>`
    },
    Orakau: {
      coords: [-38.04752343, 175.39141150],
      info: `<div class="popup-content">
              <h3>Battle of Ōrākau</h3>
              <img src="https://thumbnailer.digitalnz.org/?src=http%3A%2F%2Fwww.nzhistory.net.nz%2Ffiles%2Fstyles%2Ffullsize%2Fpublic%2Fimages%2Fwaikato-wars-5.jpg%3Fitok%3DEMVCa9jG&resize=368%253E" alt="Battle of Orakau">
              <a href="https://thumbnailer.digitalnz.org/?src=http%3A%2F%2Fwww.nzhistory.net.nz%2Ffiles%2Fstyles%2Ffullsize%2Fpublic%2Fimages%2Fwaikato-wars-5.jpg%3Fitok%3DEMVCa9jG&resize=368%253E" style="display: block; margin-bottom: 15px;">Source: Digital NZ</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/orakau.html')">Learn more</a>
          </div>`
    },
    Gate_Pa: {
      coords: [-37.716, 176.139],
      info: `<div class="popup-content">
              <h3>Battle of Gate Pā</h3>
              <img src="https://waateanews.com/wp-content/uploads/2021/08/BattleRangiriri.1.jpg" alt="Battle of Gate Pa">
              <a href="https://waateanews.com/wp-content/uploads/2021/08/BattleRangiriri.1.jpg" style="display: block; margin-bottom: 15px;">Source: Waatea News</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/gate_pa.html')">Learn more</a>
          </div>`
    },
    Te_Ranga: {
      coords: [-37.76804250660129, 176.11145815640364],
      info: `<div class="popup-content">
              <h3>Battle of Te Ranga</h3>
              <img src="https://waateanews.com/wp-content/uploads/2021/08/battle-rangiriri-2.1.jpg" alt="Battle of Te Ranga">
              <a href="https://waateanews.com/wp-content/uploads/2021/08/battle-rangiriri-2.1.jpg" style="display: block; margin-bottom: 15px;">Source: Waatea News</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/te_ranga.html')">Learn more</a>
          </div>`
    },
    Sentry_Hill: {
      coords: [-39.01992058450607, 174.1947286934386],
      info: `<div class="popup-content">
              <h3>Battle of Sentry Hill</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Sentry_Hill_%28Taranaki%29_sketch.jpg" alt="Battle of Sentry Hill">
              <a href="https://upload.wikimedia.org/wikipedia/commons/1/13/Sentry_Hill_%28Taranaki%29_sketch.jpg" style="display: block; margin-bottom: 15px;">Source: Wikipedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/sentry_hill.html')">Learn more</a>
          </div>`
    },
    Waerenga_a_Hika: {
      coords: [-38.59537380371775, 177.92641248351038],
      info: `<div class="popup-content">
              <h3>Siege of Waerenga-a-Hika</h3>
              <img src="https://media.rnztools.nz/rnz/image/upload/s--5PKeOM9N--/c_scale,f_auto,q_auto,w_1050/v1643425111/4P5OZAP_copyright_image_53320?_a=BACCd2AD" alt="Seige of Waerenga a Hika">
              <a href="https://media.rnztools.nz/rnz/image/upload/s--5PKeOM9N--/c_scale,f_auto,q_auto,w_1050/v1643425111/4P5OZAP_copyright_image_53320?_a=BACCd2AD" style="display: block; margin-bottom: 15px;">Source: RNZ News</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/waerenga_a_hika.html')">Learn more</a>
          </div>`
    }, 
    Ketemarae: {
      coords: [-39.5561843768706, 174.28615401249803],
      info: `<div class="popup-content">
              <h3>Incident of Ketemarae</h3>
              <img src="https://nzhistory.govt.nz/sites/default/files/june-09-1868-titokowaru-war_1.jpg" alt="Incident of Ketemarae">
              <a href="https://nzhistory.govt.nz/sites/default/files/june-09-1868-titokowaru-war_1.jpg" style="display: block; margin-bottom: 15px;">Source: NZ History</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/ketemarae.html')">Learn more</a>
          </div>`
    },
    Te_Ngutu_O_Te_Manu: {
      coords: [-39.485685206381405, 174.18380501584102],
      info: `<div class="popup-content">
              <h3>Battle of Te Ngutu o Te Manu</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Turuturumokai_redoubt_taranaki.jpg/500px-Turuturumokai_redoubt_taranaki.jpg" alt="Battle of Te Ngutu o Te Manu">
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Turuturumokai_redoubt_taranaki.jpg/500px-Turuturumokai_redoubt_taranaki.jpg" style="display: block; margin-bottom: 15px;">Source: Wikipedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/te_ngutu_o_te_manu.html')">Learn more</a>
          </div>`
    },
    Moturoa: {
      coords: [-39.76525910895582, 174.63106236849015],
      info: `<div class="popup-content">
              <h3>Battle of Moturoa</h3>
              <img src="https://nzhistory.govt.nz/sites/default/files/images/battle-moturoa-map.jpg" alt="Battle of Moturoa">
              <a href="https://nzhistory.govt.nz/sites/default/files/images/battle-moturoa-map.jpg" style="display: block; margin-bottom: 15px;">Source: NZ History</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/moturoa.html')">Learn more</a>
          </div>`
    },
    Taurangaika: {
      coords: [-39.81275028847944, 174.7930144311309],
      info: `<div class="popup-content">
              <h3>Battle of Taurangaika</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Plan_of_tauranga_ika_pa.jpg" alt="Battle of Taurangaika">
              <a href="https://upload.wikimedia.org/wikipedia/commons/0/0d/Plan_of_tauranga_ika_pa.jpg" style="display: block; margin-bottom: 15px;">Source: Wikipedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/taurangaika.html')">Learn more</a>
          </div>`
    },
    Whareongaonga: {
      coords: [-38.86074443, 177.90951500],
      info: `<div class="popup-content">
              <h3>Lands in Whareongaonga</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Te_Kooti%27s_War%CB%90_Fight_of_Paparatu_in_1865_%28Battles_of_the_nineteenth_century%2C_1901%29.jpg/250px-Te_Kooti%27s_War%CB%90_Fight_of_Paparatu_in_1865_%28Battles_of_the_nineteenth_century%2C_1901%29.jpg" alt="Lands in Whareongaonga">
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Te_Kooti%27s_War%CB%90_Fight_of_Paparatu_in_1865_%28Battles_of_the_nineteenth_century%2C_1901%29.jpg/250px-Te_Kooti%27s_War%CB%90_Fight_of_Paparatu_in_1865_%28Battles_of_the_nineteenth_century%2C_1901%29.jpg" style="display: block; margin-bottom: 15px;">Source: Wikipedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/whareongaonga.html')">Learn more</a>
          </div>`
    },
    Matawhero: {
      coords: [-38.65325908182853, 177.9414573993373],
      info: `<div class="popup-content">
              <h3>Matawhero Raid</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Te_Kooti%27s_War%CB%90_Poverty_Bay_Massacre_%28Battles_of_the_nineteenth_century%2C_1901%29.jpg/220px-Te_Kooti%27s_War%CB%90_Poverty_Bay_Massacre_%28Battles_of_the_nineteenth_century%2C_1901%29.jpg" alt="Matawhero Raid">
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Te_Kooti%27s_War%CB%90_Poverty_Bay_Massacre_%28Battles_of_the_nineteenth_century%2C_1901%29.jpg/220px-Te_Kooti%27s_War%CB%90_Poverty_Bay_Massacre_%28Battles_of_the_nineteenth_century%2C_1901%29.jpg" style="display: block; margin-bottom: 15px;">Source: Wikipedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/matawhero.html')">Learn more</a>
          </div>`
    },
    Ngatapa: {
      coords: [-38.585707417295765, 177.79321207140228],
      info: `<div class="popup-content">
              <h3>Siege of Ngatapa</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Plan_of_ngatapa_pa.jpg/220px-Plan_of_ngatapa_pa.jpg" alt="Siege of Ngatapa">
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Plan_of_ngatapa_pa.jpg/220px-Plan_of_ngatapa_pa.jpg" style="display: block; margin-bottom: 15px;">Source: Wikipedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/ngatapa.html')">Learn more</a>
          </div>`
    },
    Urewera: {
      coords: [-38.53484774812494, 177.03410918719462],
      info: `<div class="popup-content">
              <h3>Invasion of Urewera</h3>
              <img src="https://nzhistory.govt.nz/sites/default/files/may-06-1869-colonial-troops-urewera.jpg" alt="Invasion of Urewera">
              <a href="https://nzhistory.govt.nz/sites/default/files/may-06-1869-colonial-troops-urewera.jpg" style="display: block; margin-bottom: 15px;">Source: NZ History</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/urewera.html')">Learn more</a>
          </div>`
    },
    Te_Porere: {
      coords: [-39.03972973544591, 175.60638464009537],
      info: `<div class="popup-content">
              <h3>Battle of Te Pōrere</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lower_redoubt_at_Te_Porere.jpg/220px-Lower_redoubt_at_Te_Porere.jpg" alt="Battle of Te Pōrere">
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lower_redoubt_at_Te_Porere.jpg/220px-Lower_redoubt_at_Te_Porere.jpg" style="display: block; margin-bottom: 15px;">Source: Wikipedia</a>
              <a href="#" onclick="openSidebar('detailed_battle_information/te_porere.html')">Learn more</a>
          </div>`
    },    
  };