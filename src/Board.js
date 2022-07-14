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
            champion_ids: ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'AurelionSol', 'Azir', 'Bard', "Belveth", 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', "Chogath", 'Corki', 'Darius', 'Diana', 'Draven', 'DrMundo', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'JarvanIV', 'Jax', 'Jayce', 'Jhin', 'Jinx', "Kaisa", 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', "Khazix", 'Kindred', 'Kled', "KogMaw", 'Leblanc', 'LeeSin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'MasterYi', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nilah', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', "RekSai", 'Rell', 'Renata', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'TahmKench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'TwistedFate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', "Velkoz", 'Vex', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'MonkeyKing', 'Xayah', 'Xerath', 'XinZhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra'],
            champion_names: ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', "Bel'Veth", 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', "Cho'Gath", 'Corki', 'Darius', 'Diana', 'Draven', 'Dr. Mundo', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', "Kai'Sa", 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', "Kha'Zix", 'Kindred', 'Kled', "Kog'Maw", 'LeBlanc', 'Lee Sin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nilah', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', "Rek'Sai", 'Rell', 'Renata Glasc', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', "Vel'Koz", 'Vex', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra'],
            base_cdn_url: "https://ddragon.leagueoflegends.com/cdn",
            back_image_src: "https://cdn.discordapp.com/attachments/989474022330884106/996966460142395392/unknown.png",
            champions_to_show: 36,
            champion_indexes_to_use: [],
            champion_index_batches: [],
            your_champion_id: "",
            your_champion_name: "",
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
        let rand_int = Math.floor(Math.random() * this.state.champions_to_show)
        let index = this.state.champion_indexes_to_use[rand_int]
        let random_champion_id = this.state.champion_ids[index]
        let random_champion_name = this.state.champion_names[index]
        this.setState({your_champion_id: random_champion_id})
        this.setState({your_champion_name: random_champion_name})
        this.setState({your_champion_portrait_src: this.getChampionPortrait(random_champion_id)})
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
        let copy = Array.from(this.state.champion_indexes_to_use)
        let champion_index_batches = spliceIntoChunks(copy, tiles_per_row)
        this.setState({champion_index_batches: champion_index_batches})
        // console.log("Created batches: ", champion_index_batches)
    }

    componentDidMount() {
        try {
            Axios.get("https://ddragon.leagueoflegends.com/api/versions.json")
            .then(response => {
                this.setState({
                    ddragon_version: response.data[0]
                })
            })

            let default_champ_ids = this.state.champion_ids;

            let live_champ_ids = [];
            let live_champ_names = [];

            let do_use_live_values = false;

            Axios.get(`https://ddragon.leagueoflegends.com/cdn/${this.state.ddragon_version}/data/en_US/champion.json`)
            .then(response => {
                for (let champ in response.data.data) {
                    live_champ_ids.push(champ)
                    live_champ_names.push(response.data.data[champ].name)
                }
                this.setState({
                    champion_ids: live_champ_ids,
                    champion_names: live_champ_names
                })
                do_use_live_values = true;
                // console.log("IDs: ", champ_ids)
                // console.log("Names: ", champ_names)
            })

            let champ_ids = do_use_live_values ? live_champ_ids : default_champ_ids;

            const queryParams = new URLSearchParams(window.location.search);
            const board = queryParams.get('board');
            if (board) {
                try {
                    // Load board from seed
                    let indexes = JSON.parse(decodeURIComponent(board));
                    this.setState({champion_indexes_to_use: indexes}, () => {
                        this.batchChampionsForWindowSize(this.state.champion_indexes_to_use)
                        this.getRandomChampion();
                    })
                    return;
                } catch (error) {
                    alert(error);
                }
            }

            let champion_indexes = [];
            champion_indexes = (new Array(champ_ids.length)).fill(undefined).map((_, i) => i);

            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            shuffleArray(champion_indexes);
            let random_champ_ids = Array.from(champion_indexes.slice(0, this.state.champions_to_show));
            this.setState({champion_indexes_to_use: random_champ_ids}, () => {
                this.batchChampionsForWindowSize(this.state.champion_indexes_to_use);
            });

            let encoded_champ_indices = encodeURIComponent(JSON.stringify(random_champ_ids));
            console.log(encoded_champ_indices)
            window.location.href = `?board=${encoded_champ_indices}`

            window.addEventListener("resize", this.handleResize);

        } catch (error) {
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

    // TODO: Add a useEffect equivalent that auto adjusts the rows whenever the window is resized
    // TODO: Randomize which champions are on the board and their order 
    // (have a player click start game, it gives them a champion + a seed for their opponent to input to generate a random board)
    // Have a URL parameter that is used to generate the board
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
                            champion_id={this.state.your_champion_id} 
                            champion_name={this.state.your_champion_name} 
                            src={this.getChampionPortrait(this.state.your_champion_id)} 
                            back_src={this.state.back_image_src}
                        />
                    </div>
                    <br/>
                    <div className={"centered"}>
                        <button onClick={this.getRandomChampion}>Get a new Champion</button>
                        <button onClick={this.generateNewBoard}>Generate a new Board</button>
                        <button onClick={this.shareThisBoard}>Share this Board</button>
                    </div>
                    <div id="tiles" className={"centered flex my-tile"}>
                        {
                            Array.from(this.state.champion_index_batches).map((champion_index_batch, i) => {
                                let champ_ids_for_row = champion_index_batch.map((index) => {return this.state.champion_ids[index]})
                                let champ_names_for_row = champion_index_batch.map((index) => {return this.state.champion_names[index]})
                                let champion_portraits_for_row = champion_index_batch.map((index) => {return this.getChampionPortrait(this.state.champion_ids[index])})
                                // console.log("Made a row of length ", champion_index_batch.length)
                                return (
                                    <div key={i} className={"tile-row"}>
                                    {
                                        Array.from(champ_ids_for_row).map((champ_id, j) => {
                                            return (
                                                <Tile
                                                    key={`${i}-${j}`}
                                                    champion_id={champ_id}
                                                    champion_name={champ_names_for_row[j]}
                                                    src={champion_portraits_for_row[j]}
                                                    back_src = {this.state.back_image_src}
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