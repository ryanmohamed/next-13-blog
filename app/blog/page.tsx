import Link from "next/link";
import Article from "../../components/server/Article/Article";
import dynamic from "next/dynamic"

const CodeSnippet = dynamic(
  () => import("@/components/client/CodeSnippet/CodeSnippet")
  .then(mod => mod.default),
  { ssr: false }
)

export default function Blog() {
  return (
    <main className="p-6 sm:p-10 xl:px-48 xl:py-20">
      {/* <Link href="/">Home</Link> */}
      <Article
        title="Tailwind, a CSS dream."
        author="Ryan Mohamed"
        date="2023-05-15"
        img="https://picsum.photos/900/600"
      >
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl my-2 font-semibold">
            Introduction
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
            urna nunc id cursus metus aliquam eleifend mi. Ultricies lacus sed
            turpis tincidunt id aliquet risus feugiat in. Suspendisse ultrices
            gravida dictum fusce ut placerat orci nulla. Metus dictum at tempor
            commodo ullamcorper a. Volutpat sed cras ornare arcu dui vivamus.
            Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
            Velit laoreet id donec ultrices tincidunt arcu non. Eget egestas
            purus viverra accumsan in nisl. Viverra ipsum nunc aliquet bibendum
            enim facilisis gravida neque. Netus et malesuada fames ac turpis.
            Condimentum lacinia quis vel eros. Nullam vehicula ipsum a arcu.
            Viverra nam libero justo laoreet sit amet cursus sit. Ipsum
            suspendisse ultrices gravida dictum fusce ut placerat orci.
            Tincidunt eget nullam non nisi.
          </p>
        </div>

        <div className="mb-10 flex flex-col">
          <h2 className="text-2xl md:text-3xl my-2 font-semibold">
            Some Use Cases
          </h2>
          <p>
            Euismod quis viverra nibh cras pulvinar mattis nunc. Elementum
            tempus egestas sed sed risus pretium. Urna et pharetra pharetra
            massa massa ultricies. Nunc sed id semper risus. Purus ut faucibus
            pulvinar elementum integer enim neque volutpat. Imperdiet dui
            accumsan sit amet nulla facilisi. Nibh cras pulvinar mattis nunc.
            Viverra nibh cras pulvinar mattis. Gravida dictum fusce ut placerat.
            Senectus et netus et malesuada fames.
          </p>
          <img
            className="self-center m-4 max-w-[400px] h-auto"
            src="https://picsum.photos/400/300"
            alt="example image"
          />
          <p>
            In cursus turpis massa tincidunt dui ut ornare lectus sit. Ornare
            massa eget egestas purus viverra accumsan in. Turpis egestas
            maecenas pharetra convallis posuere. Aliquam purus sit amet luctus
            venenatis lectus magna fringilla. Mi ipsum faucibus vitae aliquet
            nec ullamcorper sit. Euismod quis viverra nibh cras. Congue quisque
            egestas diam in arcu. Et ultrices neque ornare aenean euismod
            elementum nisi quis. Sit amet facilisis magna etiam. Bibendum at
            varius vel pharetra vel. Egestas purus viverra accumsan in nisl nisi
            scelerisque eu ultrices. Viverra suspendisse potenti nullam ac
            tortor vitae purus.
          </p>
        </div>

        <div className="mb-10 flex flex-col">
          <h2 className="text-2xl md:text-3xl my-2 font-semibold">
            An Example
          </h2>
          <div className="mb-4">
            <CodeSnippet
              language="tsx"
              snippet={`export default function Button({children, ...props}: any){ 
    return <button className="flex justify-items-center p-2 rounded-lg border-emerald-950 border-2" {...props}>
      {children}
    </button>
}`}
              style={{ background: "black" }}
            />
          </div>
          <p>
            In vitae turpis massa sed elementum tempus. Egestas maecenas
            pharetra convallis posuere morbi leo urna. Elit sed vulputate mi sit
            amet mauris commodo quis. Suscipit adipiscing bibendum est
            ultricies. Sit amet tellus cras adipiscing enim eu. Sed arcu non
            odio euismod. Facilisis sed odio morbi quis commodo odio aenean.
            Purus faucibus ornare suspendisse sed. In fermentum et sollicitudin
            ac orci phasellus. In vitae turpis massa sed elementum tempus
            egestas sed sed. Condimentum vitae sapien pellentesque habitant
            morbi tristique senectus et netus. Et malesuada fames ac turpis
            egestas. Tempor nec feugiat nisl pretium fusce id velit. Et
            malesuada fames ac turpis egestas sed tempus. Sit amet nulla
            facilisi morbi. Amet commodo nulla facilisi nullam vehicula. Viverra
            maecenas accumsan lacus vel facilisis volutpat. Gravida neque
            convallis a cras semper. Ut sem viverra aliquet eget sit amet
            tellus. Eu facilisis sed odio morbi quis commodo odio aenean.
          </p>
        </div>

        <div className="mb-10 flex flex-col">
          <h2 className="text-2xl md:text-3xl my-2 font-semibold">
            In Summary
          </h2>
          <p>
            Sit amet consectetur adipiscing elit ut aliquam. Mauris ultrices
            eros in cursus turpis. Dui ut ornare lectus sit amet est placerat.
            Nisl vel pretium lectus quam id leo. Arcu dictum varius duis at
            consectetur. Urna nunc id cursus metus aliquam eleifend mi in nulla.
            Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit.
            Tempus quam pellentesque nec nam. Massa id neque aliquam vestibulum
            morbi blandit cursus risus. Mattis rhoncus urna neque viverra justo
            nec ultrices. Suscipit adipiscing bibendum est ultricies integer
            quis auctor elit sed. Lectus quam id leo in vitae turpis massa. Nunc
            sed blandit libero volutpat sed cras ornare. Ornare aenean euismod
            elementum nisi quis eleifend quam. Quis eleifend quam adipiscing
            vitae proin. Morbi tristique senectus et netus. Lacinia at quis
            risus sed vulputate odio ut enim blandit. Arcu risus quis varius
            quam. Iaculis urna id volutpat lacus laoreet non curabitur gravida
            arcu. Viverra adipiscing at in tellus integer feugiat scelerisque
            varius.
          </p>
        </div>
      </Article>
    </main>
  );
}

const makeCode = `
    // this is a sample code
    const themes = {
      light: { ... },
      dark:  { ... }
    };
    const ThemeContext = React.createContext(themes.light);
    function App() {
      return (
        <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>
      );
    }
    function Toolbar(props) { ... }
    
    const ThemedButton =() => { ... }
`;
