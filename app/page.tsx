import Image from "next/image";
import {Stack, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieForms from "./MovieForms";
import MovieCard from "./MovieCard";

export default function Home() {
  return (
    <div>
      <h1 style = {{fontSize : "24px", color : "red"}}>Home Movie List</h1>
      <h2 style = {{fontSize : "20px", color: "blue"}}>Sanif Kabukicho</h2>
      <h3 style = {{fontSize : "18px", color: "black"}}>Matkul Pemrograman Website</h3>
    
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
      </Stack>
      <br/>
      <div className="m-auto">
        <MovieForms />
      </div>
      <br/>
      <div>
        <MovieCard />
      </div>
    </div>
  );
  }