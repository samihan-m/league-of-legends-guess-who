import React, { Component } from 'react';
import Axios from 'axios';
import './Board.css'
import Tile from './Tile.js';
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ddragon_version: "12.13.1",
            champions: [
                {'id': 'Aatrox', 'name': 'Aatrox'}, {'id': 'Ahri', 'name': 'Ahri'}, {'id': 'Akali', 'name': 'Akali'}, 
                {'id': 'Akshan', 'name': 'Akshan'}, {'id': 'Alistar', 'name': 'Alistar'}, {'id': 'Amumu', 'name': 'Amumu'}, 
                {'id': 'Anivia', 'name': 'Anivia'}, {'id': 'Annie', 'name': 'Annie'}, {'id': 'Aphelios', 'name': 'Aphelios'}, 
                {'id': 'Ashe', 'name': 'Ashe'}, {'id': 'AurelionSol', 'name': 'Aurelion Sol'}, {'id': 'Azir', 'name': 'Azir'}, 
                {'id': 'Bard', 'name': 'Bard'}, {'id': 'Belveth', 'name': "Bel'Veth"}, {'id': 'Blitzcrank', 'name': 'Blitzcrank'}, 
                {'id': 'Brand', 'name': 'Brand'}, {'id': 'Braum', 'name': 'Braum'}, {'id': 'Caitlyn', 'name': 'Caitlyn'}, 
                {'id': 'Camille', 'name': 'Camille'}, {'id': 'Cassiopeia', 'name': 'Cassiopeia'}, {'id': 'Chogath', 'name': "Cho'Gath"}, 
                {'id': 'Corki', 'name': 'Corki'}, {'id': 'Darius', 'name': 'Darius'}, {'id': 'Diana', 'name': 'Diana'}, 
                {'id': 'Draven', 'name': 'Draven'}, {'id': 'DrMundo', 'name': 'Dr. Mundo'}, {'id': 'Ekko', 'name': 'Ekko'}, 
                {'id': 'Elise', 'name': 'Elise'}, {'id': 'Evelynn', 'name': 'Evelynn'}, {'id': 'Ezreal', 'name': 'Ezreal'}, 
                {'id': 'Fiddlesticks', 'name': 'Fiddlesticks'}, {'id': 'Fiora', 'name': 'Fiora'}, {'id': 'Fizz', 'name': 'Fizz'}, 
                {'id': 'Galio', 'name': 'Galio'}, {'id': 'Gangplank', 'name': 'Gangplank'}, {'id': 'Garen', 'name': 'Garen'}, 
                {'id': 'Gnar', 'name': 'Gnar'}, {'id': 'Gragas', 'name': 'Gragas'}, {'id': 'Graves', 'name': 'Graves'}, 
                {'id': 'Gwen', 'name': 'Gwen'}, {'id': 'Hecarim', 'name': 'Hecarim'}, {'id': 'Heimerdinger', 'name': 'Heimerdinger'}, 
                {'id': 'Illaoi', 'name': 'Illaoi'}, {'id': 'Irelia', 'name': 'Irelia'}, {'id': 'Ivern', 'name': 'Ivern'}, 
                {'id': 'Janna', 'name': 'Janna'}, {'id': 'JarvanIV', 'name': 'Jarvan IV'}, {'id': 'Jax', 'name': 'Jax'}, 
                {'id': 'Jayce', 'name': 'Jayce'}, {'id': 'Jhin', 'name': 'Jhin'}, {'id': 'Jinx', 'name': 'Jinx'}, 
                {'id': 'Kaisa', 'name': "Kai'Sa"}, {'id': 'Kalista', 'name': 'Kalista'}, {'id': 'Karma', 'name': 'Karma'}, 
                {'id': 'Karthus', 'name': 'Karthus'}, {'id': 'Kassadin', 'name': 'Kassadin'}, {'id': 'Katarina', 'name': 'Katarina'}, 
                {'id': 'Kayle', 'name': 'Kayle'}, {'id': 'Kayn', 'name': 'Kayn'}, {'id': 'Kennen', 'name': 'Kennen'}, 
                {'id': 'Khazix', 'name': "Kha'Zix"}, {'id': 'Kindred', 'name': 'Kindred'}, {'id': 'Kled', 'name': 'Kled'}, 
                {'id': 'KogMaw', 'name': "Kog'Maw"}, {'id': 'Leblanc', 'name': 'LeBlanc'}, {'id': 'LeeSin', 'name': 'Lee Sin'}, 
                {'id': 'Leona', 'name': 'Leona'}, {'id': 'Lillia', 'name': 'Lillia'}, {'id': 'Lissandra', 'name': 'Lissandra'}, 
                {'id': 'Lucian', 'name': 'Lucian'}, {'id': 'Lulu', 'name': 'Lulu'}, {'id': 'Lux', 'name': 'Lux'}, 
                {'id': 'Malphite', 'name': 'Malphite'}, {'id': 'Malzahar', 'name': 'Malzahar'}, {'id': 'Maokai', 'name': 'Maokai'}, 
                {'id': 'MasterYi', 'name': 'Master Yi'}, {'id': 'MissFortune', 'name': 'Miss Fortune'}, 
                {'id': 'MonkeyKing', 'name': 'Wukong'}, 
                {'id': 'Mordekaiser', 'name': 'Mordekaiser'}, {'id': 'Morgana', 'name': 'Morgana'}, {'id': 'Nami', 'name': 'Nami'}, 
                {'id': 'Nasus', 'name': 'Nasus'}, {'id': 'Nautilus', 'name': 'Nautilus'}, {'id': 'Neeko', 'name': 'Neeko'}, 
                {'id': 'Nidalee', 'name': 'Nidalee'}, {'id': 'Nilah', 'name': 'Nilah'}, {'id': 'Nocturne', 'name': 'Nocturne'}, 
                {'id': 'Nunu', 'name': 'Nunu&Willump'}, {'id': 'Olaf', 'name': 'Olaf'}, {'id': 'Orianna', 'name': 'Orianna'}, 
                {'id': 'Ornn', 'name': 'Ornn'}, {'id': 'Pantheon', 'name': 'Pantheon'}, {'id': 'Poppy', 'name': 'Poppy'}, 
                {'id': 'Pyke', 'name': 'Pyke'}, {'id': 'Qiyana', 'name': 'Qiyana'}, {'id': 'Quinn', 'name': 'Quinn'}, 
                {'id': 'Rakan', 'name': 'Rakan'}, {'id': 'Rammus', 'name': 'Rammus'}, {'id': 'RekSai', 'name': "Rek'Sai"}, 
                {'id': 'Rell', 'name': 'Rell'}, {'id': 'Renata', 'name': 'Renata Glasc'}, {'id': 'Renekton', 'name': 'Renekton'}, 
                {'id': 'Rengar', 'name': 'Rengar'}, {'id': 'Riven', 'name': 'Riven'}, {'id': 'Rumble', 'name': 'Rumble'}, 
                {'id': 'Ryze', 'name': 'Ryze'}, {'id': 'Samira', 'name': 'Samira'}, {'id': 'Sejuani', 'name': 'Sejuani'}, 
                {'id': 'Senna', 'name': 'Senna'}, {'id': 'Seraphine', 'name': 'Seraphine'}, {'id': 'Sett', 'name': 'Sett'}, 
                {'id': 'Shaco', 'name': 'Shaco'}, {'id': 'Shen', 'name': 'Shen'}, {'id': 'Shyvana', 'name': 'Shyvana'}, 
                {'id': 'Singed', 'name': 'Singed'}, {'id': 'Sion', 'name': 'Sion'}, {'id': 'Sivir', 'name': 'Sivir'}, 
                {'id': 'Skarner', 'name': 'Skarner'}, {'id': 'Sona', 'name': 'Sona'}, {'id': 'Soraka', 'name': 'Soraka'}, 
                {'id': 'Swain', 'name': 'Swain'}, {'id': 'Sylas', 'name': 'Sylas'}, {'id': 'Syndra', 'name': 'Syndra'}, 
                {'id': 'TahmKench', 'name': 'Tahm Kench'}, {'id': 'Taliyah', 'name': 'Taliyah'}, {'id': 'Talon', 'name': 'Talon'}, 
                {'id': 'Taric', 'name': 'Taric'}, {'id': 'Teemo', 'name': 'Teemo'}, {'id': 'Thresh', 'name': 'Thresh'}, 
                {'id': 'Tristana', 'name': 'Tristana'}, {'id': 'Trundle', 'name': 'Trundle'}, {'id': 'Tryndamere', 'name': 'Tryndamere'}, 
                {'id': 'TwistedFate', 'name': 'Twisted Fate'}, {'id': 'Twitch', 'name': 'Twitch'}, {'id': 'Udyr', 'name': 'Udyr'}, 
                {'id': 'Urgot', 'name': 'Urgot'}, {'id': 'Varus', 'name': 'Varus'}, {'id': 'Vayne', 'name': 'Vayne'}, 
                {'id': 'Veigar', 'name': 'Veigar'}, {'id': 'Velkoz', 'name': "Vel'Koz"}, {'id': 'Vex', 'name': 'Vex'}, 
                {'id': 'Vi', 'name': 'Vi'}, {'id': 'Viego', 'name': 'Viego'}, {'id': 'Viktor', 'name': 'Viktor'}, 
                {'id': 'Vladimir', 'name': 'Vladimir'}, {'id': 'Volibear', 'name': 'Volibear'}, {'id': 'Warwick', 'name': 'Warwick'}, 
                {'id': 'Xayah', 'name': 'Xayah'}, {'id': 'Xerath', 'name': 'Xerath'}, 
                {'id': 'XinZhao', 'name': 'Xin Zhao'}, {'id': 'Yasuo', 'name': 'Yasuo'}, {'id': 'Yone', 'name': 'Yone'}, 
                {'id': 'Yorick', 'name': 'Yorick'}, {'id': 'Yuumi', 'name': 'Yuumi'}, {'id': 'Zac', 'name': 'Zac'}, 
                {'id': 'Zed', 'name': 'Zed'}, {'id': 'Zeri', 'name': 'Zeri'}, {'id': 'Ziggs', 'name': 'Ziggs'}, 
                {'id': 'Zilean', 'name': 'Zilean'}, {'id': 'Zoe', 'name': 'Zoe'}, {'id': 'Zyra', 'name': 'Zyra'}
            ],
            base_cdn_url: "https://ddragon.leagueoflegends.com/cdn",
            back_image_src: "https://cdn.discordapp.com/attachments/989474022330884106/996966460142395392/unknown.png",
            champions_to_show: 36,
            champion_indexes_to_use: [],
            champion_index_batches: [[]],
            your_champion: {
                id: "",
                name: "",
                portrait: "https://cdn.discordapp.com/attachments/989474022330884106/996966460142395392/unknown.png",
            }
        };
        this.handleResize = this.handleResize.bind(this);
    }

    getChampionSplash = (champion_id, skin_index) => {
        const url = `${this.state.base_cdn_url}/img/champion/splash/${champion_id}_${skin_index}.jpg`; // (0 means default skin)
        return url;
    }
    
    getChampionLoadingScreenImage = (champion_id, skin_index) => {
        const url = `${this.state.base_cdn_url}/img/champion/loading/${champion_id}_${skin_index}.jpg`; // (0 means default skin)
        return url;
    }
    
    getChampionPortrait = (champion_id) => {
        const url = `${this.state.base_cdn_url}/${this.state.ddragon_version}/img/champion/${champion_id}.png`;
        return url;
    }

    getRandomChampion = () => {
        let rand_int = Math.floor(Math.random() * this.state.champion_indexes_to_use.length);
        const selected_champion_index = this.state.champion_indexes_to_use[rand_int];
        const selected_champion = this.state.champions[selected_champion_index];
        this.setState({
            your_champion: {
                id: selected_champion.id,
                name: selected_champion.name,
                portrait: this.getChampionPortrait(selected_champion.id),
            }
        })
    }

    finishLoadingBoard = () => {
        this.batchChampionsForWindowSize()
        this.getRandomChampion()
    }

    batchChampionsForWindowSize = () => {
        function spliceIntoChunks(arr, chunkSize) {
            const res = [];
            while (arr.length > 0) {
                const chunk = arr.splice(0, chunkSize);
                res.push(chunk);
            }
            return res;
        }
        const TILE_WIDTH = 120 + 10 // 120px for the champion portrait, 10px for the margin
        let tiles_per_row = Math.floor(window.innerWidth / TILE_WIDTH)
        let copy_of_indexes_to_use = Array.from(this.state.champion_indexes_to_use)
        let champion_index_batches = spliceIntoChunks(copy_of_indexes_to_use, tiles_per_row)
        this.setState({champion_index_batches: champion_index_batches})
    }

    componentDidMount() {
        try {
            Axios.get("https://ddragon.leagueoflegends.com/api/versions.json")
            .then(response => {
                this.setState({
                    ddragon_version: response.data[0]
                })
            })

            let live_champions = [];
            let do_use_live_values = false;

            Axios.get(`https://ddragon.leagueoflegends.com/cdn/${this.state.ddragon_version}/data/en_US/champion.json`)
            .then(response => {
                for (let champ in response.data.data) {
                    let champ_data = {
                        id: champ,
                        name: response.data.data[champ].name,
                    } 
                    live_champions.push(champ_data)
                }
                this.setState({
                    champions: live_champions
                })
                do_use_live_values = true;
            })

            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            const queryParams = new URLSearchParams(window.location.search);
            const board = queryParams.get('board');
            if (board) {
                try {
                    // Load board from seed
                    let indexes = JSON.parse(decodeURIComponent(board));
                    shuffleArray(indexes);
                    this.setState({champion_indexes_to_use: indexes}, () => {
                        this.finishLoadingBoard()
                    })
                    return;
                } catch (error) {
                    alert(error);
                }
            }

            let champions = Array.from(do_use_live_values ? live_champions : this.state.champions);

            let all_champion_indexes = (new Array(champions.length)).fill(undefined).map((_, i) => i);
            shuffleArray(all_champion_indexes);
            let selected_champion_indexes = all_champion_indexes.slice(0, this.state.champions_to_show);
            this.setState({champion_indexes_to_use: selected_champion_indexes}, () => {
                this.finishLoadingBoard()
            });

            let encoded_champ_indices = encodeURIComponent(JSON.stringify(selected_champion_indexes));
            window.location.href = `?board=${encoded_champ_indices}`

            window.addEventListener("resize", this.handleResize);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    generateNewBoard() {
        window.location.href = "/";
    }

    shareThisBoard() {
        if (!navigator.clipboard) {
            alert("Clipboard API not supported, sorry! Manually copy the URL to share this board.");
        }
        navigator.clipboard.writeText(window.location.href).then(function() {
            alert('Link copied to clipboard!');
        }, function(err) {
            alert('Could not copy text, sorry! Manually copy the URL to share this board.');
            console.log(err);
        });
    }

    componentWillUnmount() {
        window.addEventListener("resize", null);
    }
    
    handleResize = (event) => {
        this.batchChampionsForWindowSize()
    }

    // original plan, saved for progeny
    /*
    Main page -> play game
    -> "generate game link" -> click button
            -> randomly select 36 champions + b64 encode them (this is the url parameter)
            -> going to this link loads the game page with that set of 36 champions 
            -> (but randomly arranges them, + selects one of them as the player's champion)
        gives you a link that you can send to a friend
    */

    render() {
        return(
            <div>
                <h2 className={"centered"}>Your Champion</h2>
                <br/>
                <div className={"centered my-tile"}>
                    <Tile 
                        champion_id={this.state.your_champion.id} 
                        champion_name={this.state.your_champion.name} 
                        src={this.state.your_champion.portrait} 
                        back_src={this.state.back_image_src}
                    />
                </div>
                <br/>
                <div className={"centered"}>
                    <button onClick={this.getRandomChampion}><i></i>GET A NEW CHAMPION</button>
                    <button onClick={this.generateNewBoard}><i></i>GENERATE A NEW BOARD</button>
                    <button onClick={this.shareThisBoard}><i></i>SHARE THIS BOARD</button>
                </div>
                <div id="tiles" className={"centered flex my-tile"}>
                    {
                        this.state.champion_index_batches.map((champion_index_batch, batch_index) => {
                            return (
                                <div key={batch_index} className={"tile-row"}>
                                    {
                                        champion_index_batch.map((champion_index, tile_index) => {
                                            let champion = this.state.champions[champion_index];
                                            return (
                                                <Tile 
                                                    key={tile_index} 
                                                    champion_id={champion.id} 
                                                    champion_name={champion.name} 
                                                    src={this.getChampionPortrait(champion.id)} 
                                                    back_src={this.state.back_image_src}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withParams(Board);