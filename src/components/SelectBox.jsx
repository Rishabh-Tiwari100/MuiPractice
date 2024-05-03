import React, { Component } from "react";
import { Box, Input, Typography } from "@mui/material";

export default class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      multiSelected: [],
      openSelect: false,
      searchedWord: "",
      searchedMovies: [],
    };
  }

  componentDidMount() {
    this.setState({
      searchedMovies: [...this.props.movieOptions],
    });
  }

  handleSearch = (e) => {
    let arr = [];
    let word = e.target.value.toLowerCase();

    arr = this.props.movieOptions.filter((data) => {
      return data.title.toLowerCase().startsWith(word);
    });

    this.setState({
      searchedWord: e.target.value,
      searchedMovies: arr,
    });
  };

  handleCheckboxChange = (e, movie) => {
    const { multiSelected } = this.state;
    const checked = e.target.checked;
    if (checked) {
      this.setState({
        multiSelected: [...multiSelected, movie],
      });
    } else {
      this.setState({
        multiSelected: multiSelected.filter((item) => item !== movie),
      });
    }
  };
  handleRadioChange = (e, movie) => {
  
    const checked = e.target.checked;
    if (checked) {
      this.setState({
        selectedMovie: movie
      });
    } else {
      this.setState({
        selectedMovie : null,
      });
    }
  };

  render() {
  
    const { searchedMovies } = this.state;
    const { title, movieOptions, multiSelectEnabled } = this.props;
    return (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         
        }}
      >
        <Box
          style={{
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "500px",
            position:"relative",
          }}
        >
        
          <Typography
            onClick={() => {
              this.setState({
                openSelect: !this.state.openSelect,
              });
            }}
            style={{position:"relative", padding: "10px", border: "1px solid red",cursor:"pointer",width:"100%",textAlign:"center" }}
          >
             {
            multiSelectEnabled == false && 
            <>
              {this.state.selectedMovie == null ? title : this.state.selectedMovie.title}
            </>
           }
           { multiSelectEnabled && 
           <>
           {this.state.multiSelected.length ==0 &&   title }
           {this.state.multiSelected.length ==1 && this.state.multiSelected[0].title }
           {this.state.multiSelected.length ==2 && <Typography>{this.state.multiSelected[0].title.length > 7 ? `${this.state.multiSelected[0].title.slice(0,8)}...` : this.state.multiSelected[0].title}{" , "}{this.state.multiSelected[1].title.length > 7 ?`${this.state.multiSelected[1].title.slice(0,8)}...`: this.state.multiSelected[1].title}</Typography>}
           {this.state.multiSelected.length >2 && <Typography>{this.state.multiSelected[0].title.length > 7 ? `${this.state.multiSelected[0].title.slice(0,8)}...` : this.state.multiSelected[0].title}{" , "}{this.state.multiSelected[1].title.length > 7 ?`${this.state.multiSelected[1].title.slice(0,8)}...`: this.state.multiSelected[1].title}{"+"}{this.state.multiSelected.length-2}</Typography>}
           </>
           }
          
            {this.state.openSelect ? (
              <i
                style={{ position:"absolute",right:"10px", top:"160x" }}
                className="fa-solid fa-angle-up"
              ></i>
            ) : (
              <i
                style={{ position:"absolute",right:"10px",top:"16px" }}
                className="fa-solid fa-angle-down"
              ></i>
            )}
          </Typography>

          {this.state.openSelect && (
            <Box style={{ zIndex:"1",width:"100%", padding: "10px" ,maxHeight:"80vh",overflowY :"scroll",position:"absolute",background:"#fff",top:"46px",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
              <Input
                fullWidth
                value={this.state.searchedWord}
                onChange={this.handleSearch}
                placeholder="Search Here"
                disableUnderline
                style={{ border: "1px solid black" }}
              />
              <Box>
                {multiSelectEnabled &&
                  searchedMovies.map((movie, index) => (
                    <Box
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "5px",
                      }}
                    >
                      <input
                        id={`movie-${index}`}
                        type="checkbox"
                        checked={this.state.multiSelected.includes(movie)}
                        onChange={(e) => this.handleCheckboxChange(e, movie)}
                      />
                      <span>
                      {movie.icon}
                      </span>
                      <label style={{flexGrow: "1",cursor:"pointer"}} htmlFor={`movie-${index}`}>{movie.title}</label>
                    </Box>
                  ))}
                {!multiSelectEnabled &&
                  searchedMovies.map((movie, index) => {
                    return (
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap :"10px",
                          padding: "5px",
                        }}
                        onClick={() => {
                          this.setState({
                            selectedMovie: searchedMovies[index],
                            openSelect: false,
                          });
                      
                        }}
                      >
                          <input
                        id={`movie-${index}`}
                        type="radio"
                        checked={this.state.selectedMovie === movie}
                        onChange={(e) => this.handleRadioChange(e, movie)}
                      />
                      <span>
                      {movie.icon}
                      </span>
                      <label style={{flexGrow: "1",cursor:"pointer"}} htmlFor={`movie-${index}`}>{movie.title}</label>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
}







    // movieOptions: [
      //   { title: "The Shawshank Redemption", year: 1994 },
      //   { title: "The Godfather", year: 1972 },
      //   { title: "The Godfather: Part II", year: 1974 },
      //   { title: "The Dark Knight", year: 2008 },
      //   { title: "12 Angry Men", year: 1957 },
      //   { title: "Schindler's List", year: 1993 },
      //   { title: "Pulp Fiction", year: 1994 },
      //   {
      //     title: "The Lord of the Rings: The Return of the King",
      //     year: 2003,
      //   },
      //   { title: "The Good, the Bad and the Ugly", year: 1966 },
      //   { title: "Fight Club", year: 1999 },
      //   {
      //     title: "The Lord of the Rings: The Fellowship of the Ring",
      //     year: 2001,
      //   },
      //   {
      //     title: "Star Wars: Episode V - The Empire Strikes Back",
      //     year: 1980,
      //   },
      //   { title: "Forrest Gump", year: 1994 },
      //   { title: "Inception", year: 2010 },
      //   {
      //     title: "The Lord of the Rings: The Two Towers",
      //     year: 2002,
      //   },
      //   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
      //   { title: "Goodfellas", year: 1990 },
      //   { title: "The Matrix", year: 1999 },
      //   { title: "Seven Samurai", year: 1954 },
      //   {
      //     title: "Star Wars: Episode IV - A New Hope",
      //     year: 1977,
      //   },
      //   { title: "City of God", year: 2002 },
      //   { title: "Se7en", year: 1995 },
      //   { title: "The Silence of the Lambs", year: 1991 },
      //   { title: "It's a Wonderful Life", year: 1946 },
      //   { title: "Life Is Beautiful", year: 1997 },
      //   { title: "The Usual Suspects", year: 1995 },
      //   { title: "Léon: The Professional", year: 1994 },
      //   { title: "Spirited Away", year: 2001 },
      //   { title: "Saving Private Ryan", year: 1998 },
      //   { title: "Once Upon a Time in the West", year: 1968 },
      //   { title: "American History X", year: 1998 },
      //   { title: "Interstellar", year: 2014 },
      //   { title: "Casablanca", year: 1942 },
      //   { title: "City Lights", year: 1931 },
      //   { title: "Psycho", year: 1960 },
      //   { title: "The Green Mile", year: 1999 },
      //   { title: "The Intouchables", year: 2011 },
      //   { title: "Modern Times", year: 1936 },
      //   { title: "Raiders of the Lost Ark", year: 1981 },
      //   { title: "Rear Window", year: 1954 },
      //   { title: "The Pianist", year: 2002 },
      //   { title: "The Departed", year: 2006 },
      //   { title: "Terminator 2: Judgment Day", year: 1991 },
      //   { title: "Back to the Future", year: 1985 },
      //   { title: "Whiplash", year: 2014 },
      //   { title: "Gladiator", year: 2000 },
      //   { title: "Memento", year: 2000 },
      //   { title: "The Prestige", year: 2006 },
      //   { title: "The Lion King", year: 1994 },
      //   { title: "Apocalypse Now", year: 1979 },
      //   { title: "Alien", year: 1979 },
      //   { title: "Sunset Boulevard", year: 1950 },
      //   {
      //     title:
      //       "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      //     year: 1964,
      //   },
      //   { title: "The Great Dictator", year: 1940 },
      //   { title: "Cinema Paradiso", year: 1988 },
      //   { title: "The Lives of Others", year: 2006 },
      //   { title: "Grave of the Fireflies", year: 1988 },
      //   { title: "Paths of Glory", year: 1957 },
      //   { title: "Django Unchained", year: 2012 },
      //   { title: "The Shining", year: 1980 },
      //   { title: "WALL·E", year: 2008 },
      //   { title: "American Beauty", year: 1999 },
      //   { title: "The Dark Knight Rises", year: 2012 },
      //   { title: "Princess Mononoke", year: 1997 },
      //   { title: "Aliens", year: 1986 },
      //   { title: "Oldboy", year: 2003 },
      //   { title: "Once Upon a Time in America", year: 1984 },
      //   { title: "Witness for the Prosecution", year: 1957 },
      //   { title: "Das Boot", year: 1981 },
      //   { title: "Citizen Kane", year: 1941 },
      //   { title: "North by Northwest", year: 1959 },
      //   { title: "Vertigo", year: 1958 },
      //   {
      //     title: "Star Wars: Episode VI - Return of the Jedi",
      //     year: 1983,
      //   },
      //   { title: "Reservoir Dogs", year: 1992 },
      //   { title: "Braveheart", year: 1995 },
      //   { title: "M", year: 1931 },
      //   { title: "Requiem for a Dream", year: 2000 },
      //   { title: "Amélie", year: 2001 },
      //   { title: "A Clockwork Orange", year: 1971 },
      //   { title: "Like Stars on Earth", year: 2007 },
      //   { title: "Taxi Driver", year: 1976 },
      //   { title: "Lawrence of Arabia", year: 1962 },
      //   { title: "Double Indemnity", year: 1944 },
      //   {
      //     title: "Eternal Sunshine of the Spotless Mind",
      //     year: 2004,
      //   },
      //   { title: "Amadeus", year: 1984 },
      //   { title: "To Kill a Mockingbird", year: 1962 },
      //   { title: "Toy Story 3", year: 2010 },
      //   { title: "Logan", year: 2017 },
      //   { title: "Full Metal Jacket", year: 1987 },
      //   { title: "Dangal", year: 2016 },
      //   { title: "The Sting", year: 1973 },
      //   { title: "2001: A Space Odyssey", year: 1968 },
      //   { title: "Singin' in the Rain", year: 1952 },
      //   { title: "Toy Story", year: 1995 },
      //   { title: "Bicycle Thieves", year: 1948 },
      //   { title: "The Kid", year: 1921 },
      //   { title: "Inglourious Basterds", year: 2009 },
      //   { title: "Snatch", year: 2000 },
      //   { title: "3 Idiots", year: 2009 },
      //   { title: "Monty Python and the Holy Grail", year: 1975 },
      // ],