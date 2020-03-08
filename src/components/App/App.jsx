import React, { Component } from 'react';

import './App.scss';

const SOUNDS = [
  {
    id: 'Q',
    keyCode: 81,
    desc: 'An acoustic old school rock bass drum with open hi hat choke oneshot.',
    src: 'https://www.soundsnap.com/streamers/play.php?id=1583698309.6105:908f65345b768744a5760bcd113547bda9d9eabd:9fe93931dbecb8f6e7881f7b5a3620b5a8fc0ec9e199c785cb86c85f78ebd320c7c76b0f3c8b381fafd54a2947e586fa7410a9e6f76da51c4df257dd8b404d1989657706d4dc06b7ca44659cad2b4734c06e82058cecd3b3008236d9cb0ff7ba3d69c304159ad4fcd06d9a48ba19809efd3cacd1334c50197a6629586563d957b910fb0736ad8625f27a778e18fcac73cac04345e9edd633effcfbad3aabeebd3b77b71a2b5276cf5d28203c0daac0298b325ac15523a9dd91b82c0c231100d578200d6832368ed4eabf0d82e67d2fd9b43b194e4e55ea963e0b2d1ef9851c06964a5bb2ee5bbc51dc98bff8ff6a756d4f7981280a253f02e36bb1ac42e062816c7c16d43dcd78bcad6d7d27985f06a3',
  },
  {
    id: 'W',
    keyCode: 87,
    desc: 'A single hit on an acoustic Tom-tom drum.',
    src: 'https://www.soundsnap.com/streamers/play.php?id=1583698309.6353:4efdf7fa328b8f3c9d5e746b6e3d22fc6e4d9ce8:95224d7b34b9e612d535c93f3607d7cbdd7007c8b083697d25205ad1b1c68ff3f504dd462d10d903db47d8f03ad5dd26e617380341a434ad9365cfc6be33fb24fa488472f439e2f2e0329615584c2783da97c30f4dc87cd979d81ef2bdeab48bb5fb18ad7ff2dcc03fb7cef895a54c9e0e5fa2384424ab4e75228763823fe744856643ab576ec80fd700c097748fc5f59cd16ad41bc91b4106ba00cc244b435cd56f06d4f561118bfbde9a55ddc6e64a1810e9fd06cadeb557ab3062aab9801dc4281d0bb3fd441092f9083af9752cd59556165bcf3d023ddc1d9cdd86ed9c65bb7ef313af6215572b853adec46361697abcdccf4400f7a3d9a98a805f7f3f941b4f51e141d487617ac5a08dbdb0a44c',
  },
  {
    id: 'E',
    keyCode: 69,
    desc: 'An acoustic old school rock bass drum with open hi hat choke oneshot 2.',
    src: 'https://www.soundsnap.com/streamers/play.php?id=1583698309.6596:d82a4873edeecd41a3ccfeb1e82f3d4ceb17c0f0:319b4d4752a17356b592ef2ea333e87ce44ed2cb4bc7ec7f3953e64e1b3106222ca7a8b3d353e7c3fd8e1beeb47b1ce47e4687b734d12d12442f2899d52a1503215602ce260c6127e9172eaa73488609803e4f59ecd3a40dcb74f561a2daa0d599aa071f28a17dab352f1df15106a82be5e44fe3e2b7612497cdbbc4588ecadd348f0c7bfc3c957c76954b0bb32ae752478837aa82d6169b0d7b810fb78c43a3f5afb6196e4a1e20b3ecae05200a00726bd12838ee0e4cd1b655e42a4149122e82a88c05baf7f91059fffaa23bd583079a2fdcae2c57c8881c3c28072d00a9e322b8907cc6c8afcceb934427223bd65fc0582a9b818dc3a903ee084c0589eaa40c48410ecc874a9151d244bb5601c2d9',
  },
  {
    id: 'A',
    keyCode: 65,
    desc: 'A tom ping with reverb.',
    src: 'https://www.soundsnap.com/streamers/play.php?id=1583698309.7274:8de7a5e252689f3d1ffadb6d87be87d6944f2012:bcffcc2d6954452d9dfb2bf1a73ddc54bc5cc25e1c1c4c40f9209011da497107879952b84d780f3a970704764e400d2d0f50c4d50594a457f6577c64a995b7c3e585755d85b58af3e0592d45ccdf4bb7c064375d3050f6c815171466dcfcb11f96276e02753bd578979bedbb681376d3729e85d1d857350d23ba248720d2e5a4616e56a85299aa66a2bd204217e956250a5484959a3bb8a4234093325264dc972493885785381a98c670350bfa195ab0db50c22df2c89a75a643c57b3b82153edb0a52c1fab7bea2acfc8d50bd5488664b255530bd65e37c17c30ffc78cfdb090cf72c0fdde264c809171618c50177dcddd9c42f79de5f5035f28e69a21a4f5ca45085d6c5a415263f090e0efefabd21',
  },
  {
    id: 'S',
    keyCode: 83,
    desc: 'An acoustic old school rock snare drum oneshot',
    src: 'https://www.soundsnap.com/streamers/play.php?id=1583698309.7541:8f81bc396991d3f852c5caf1069b391a86dd9300:476e2548688415d4b3281e31d89fb19248b0160affcc81cb02dc7d816a0c894da94ae7c5e60e5eeaa9830ee00e826e95074a37c7ba5d829d0d87697f5ed0be12fbe7ef5a3fd666e7cac069f1e11ae1a6c5690b8219c58a9a1f965c20e9463f0889ac7b7199bfd9034cbce7243a804bc4167b9ff98390e9fb570ddd2b20ba182299ff7708c6a42c748f77f2f2af94e3da4cc28ddcf0605b96fce9f02812e53ef3e753ff2888a319eef7cdd373ff011eb6d53de8c6690aee204bf88045f208fd25e0177ae409e6cae33c4215448dfb26c844cc19c8e81f30c345d8477208bcebbfe82105f89edc5969887cbdf5bd037d32394111c76ebf4f9a630495a1f6736ca78c6c072dc082da75815347218b5397ea',
  },
  {
    id: 'D',
    keyCode: 68,
    desc: 'A snare roll.',
    src: 'https://www.soundsnap.com/streamers/play.php?id=1583698309.8911:91091052ba0d3964dbaf0dd66e522db39d3cde9b:426947d82955a2acc27771e51f5d14597c2234e20dc7d515fa0d4e826fe46059bac849aabdecd90f228c3742070207882eda3ca86c2a13dfd222d9ecd05abeb8bab5080fdb575fd72486ed73612ed47d7003da17b6413dc49232dc8f58f07c2ccbc2c85e94daa92367008179472fd4bbc8b10ab9c90b602321fe53a3aaed0d435e7d4e4cf24cad79d431bcad5f28191cd8b1bda1a690e38295e79633a5bca0692d1e915396b6b00712a94b9d204f63d6212cd1d5c9e28b412376670653c0359f70fa5049b822e311611233c25df81b08e50a3fe7aef198ebf9a9b654cd151dbde42a89fa6e81124acf9d8ee8f087dbaf55f579ab20487fd54bd3a97f519ce766fa480059a536934a529be38101d0b318',
  },
  {
    id: 'Z',
    keyCode: 90,
    desc: 'An acoustic old school rock hi hat oneshot sample.',
    src: 'https://www.soundsnap.com/streamers/play.php?id=1583698309.9774:1212730142388db5003aaf90ab80332685c8b342:11f8a26869898cb9a8bc19f50ad1811c8fe5ebb2cfca5be52885eb8234574704881a82ddfe5d57c62cfd10ec776f85e3400c3586865aa74b66ec19548e7ec9a77bf9a69a66723529a4e2b9bc99ce5dfe4a255b6c545b03080c5ee5d5324410a3869db38d75c191f8dc69ced9a5a7569ff128705006a3db0a6b7674f18ea7545f5dbaa82962efb48a6942b1c9c736b6bfa6a95fabc0bd9f67ff46eb3df2f96c672f8d72c274581f23f0c3c11be1703abdae7baab4330d9a8a4545355295df8497ac1f85d5fa6330f04347cc50117dd11d4713463d7fd77d344bc67bcda4d174f48d2773171a65eae156102773e54573d1864afb57eea8c0965d749aefbbab5c87efb176d9b2122b42cf7ce5e71d5b5b37',
  },
  {
    id: 'X',
    keyCode: 88,
    desc: 'Percussion chime.',
    src: 'https://www.soundsnap.com/streamers/play.php?id=1583698562.6341:1122da21cd20febf0777c5449b38c090367140ac:1a4e152d359a7a5f302222a6981e6b6dd6e1a52bd50b84436896ebeb5dcb9eea5f371a03d5f6958ff2cfe94b132da4092492703b3c3b3a80102ae5262104dfbbb55b185f1e0dc8cf5bc100e488d2b631ae0c8d9bb1312f1061377b792a30b245f9f9e16378cf012795d84b6ca997c228643eecb284c09cb0d2d9a886679623781906059c6428825917fd0ea53614d97513950a11b64bc65cae88d65b6a635d2a0280661001b9feb7040d7cb0d475963597dcf8bdeec60a1333c3df58607707f1a5a528d119186ecef8a874b20d84a1764e2d05c91f986b2db6b36e8b888ee331f0bf6e2925ab4632a4992be54df2c633dcbf3f9d535980bafdbce282b2920075d6f0092f531ebc1be965f81d63c8ab41',
  },
  {
    id: 'C',
    keyCode: 67,
    desc: 'A tight snare hit with reverb.',
    src: 'https://www.soundsnap.com/streamers/play.php?id=1583698562.7798:c8797ac38d1ac9aa634705ba4ca032919c4b096d:486885cea3833530b810781b4b1d54141198c7b628e1bdcdd6b683ab0bb7a9f48779750a73b4c86b023aba6ec55fdee0b225543bc5cad3ddde3ec16715df9c4f2e4b9c4f02b3dd697478c2f650d4a9225dbce29d40e625af2f74073a83455364b1e554ce71e56d034d8394090af935e846103572eff15ca8c0c267ece86897653abf80bcc81d9747efac6bdbb79041ab6295688dcd6047f04d0a6997effcd89d01f374f3f480dd2dea06873d5a19e705e76deb9f713c340da4a324390209d0522246e0247c2128e3ba903997c3e13a7778e5e7bde4c6dda46f42296411adadc635ea74f3c5c97dcb08efbc27e4f0a017bb335e07d9cab782d8a7c928392b1638c999de54b10f1aed6645ac27db0d8a041299d664b5fe2b4429dc74913a37e61f',
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: '',
      display: 'No sound played yet!',
    };

    SOUNDS.forEach(({ id }) => {
      this[id] = React.createRef();
    });

    this.playSound = this.playSound.bind(this);
    this.keyPressToPlay = this.keyPressToPlay.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPressToPlay);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPressToPlay);
  }

  keyPressToPlay({ keyCode }) {
    const soundIndex = SOUNDS.findIndex(sound => sound.keyCode === keyCode);

    if (soundIndex === -1) return;

    this.playSound(SOUNDS[soundIndex].id, SOUNDS[soundIndex].desc);
  }

  playSound(id, desc) {
    this[id].current.play();

    this.setState({ activeId: id, display: desc });
    setTimeout(() => { this.setState({ activeId: '' }); }, 300);
  }

  render() {
    return (
      <div className="app">
        <div id="drum-machine">
          <div id="display">{ this.state.display }</div>

          <div className="drum-pads-wrapper">
            {
              SOUNDS.map(({ id, src, desc }, index) => (
                <div
                  className={`drum-pad ${this.state.activeId === id ? 'active' : ''}`}
                  id={`${index} ${id}`}
                  key={id}
                  onClick={() => { this.playSound(id, desc); }}
                >
                  { id }
                  <audio ref={this[id]} className="clip" src={src} id={id} /> {/* eslint-disable-line */}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
