import mypic from "../../assets/he-pic.jpg";
import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";
import ArrowPosts from "./ArrowPosts";
import { SkillsCycle } from "./SkillsCycle";
import { SocialMediaList } from "./SocialMediaList";

const desktopWorking = (
  <>
    <main className="h-full bg-he-background px-page-default space-y-14 pt-24">
      <div className="font-jomolhari flex justify-between h-4/6">
        <div className="flex flex-col justify-center w-1/2 px-7 space-y-9">
          <div className="space-y-2">
            <div>
              <p className="text-xl text-white">Hi there, i am</p>
            </div>
            <div>
              <p className="text-7xl text-white leading-tight">
                Ivan Miranda, Software Enginner🤙
              </p>
            </div>
            <div>
              <p className="text-md text-low-text-black font-inter">
                Currently working at @C6Bank, São Paulo Brasil
              </p>
            </div>
          </div>
          <ArrowPosts />
          <SocialMediaList />
        </div>
        <div className="flex items-center bg-slate-100 w-1/2 rounded-tl-full rounded-bl-full rounded-br-sm rounded-tr-sm overflow-hidden max-h-fit">
          <img
            src={mypic}
            alt="Descrição da imagem"
            className="w-full h-full object-cover rounded-tl-full rounded-bl-full rounded-br-sm rounded-tr-sm"
          />
        </div>
      </div>
    </main>
  </>
);

export function AboutHe() {
  return (
    <>
      <Header type={PageType.HE} />

      <main className="h-full py-32 bg-he-background px-default-width">
        <div className="font-jomolhari flex flex-col text-font-black-color space-y-default-heigh">
          {/* Box apresentaçao, com nome cargo e onde trabalho */}
          <div className="flex flex-col justify-center space-y-2">
            <div>
              <div>
                <p className="text-md text-white">Hi there, i am</p>
              </div>
              <div>
                <p className="text-5xl leading-tight text-white">
                  Ivan Miranda, Software Enginner🤙
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-low-text-black font-inter">
                Currently working at @C6Bank, São Paulo Brasil
              </p>
            </div>
          </div>
          {/* TODO:  My posts components -> arrow maybe change to something better*/}
          <div className="flex flex-row">
            <img
              src={mypic}
              alt="Descrição da imagem"
              className="w-1/2 object-cover rounded-tl-sm rounded-bl-sm rounded-br-full rounded-tr-full"
            />
            <div className="w-1/2">
              <SocialMediaList />
            </div>
          </div>
          <ArrowPosts />

          <div className="text-white font-inter space-y-4">
            <h1 className="text-2xl border-b-4 border-purple-800 w-fit pr-4">
              About me
            </h1>
            <p className="text-md font-extralight leading-relaxed">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id. Praesent lorem orci,
              mattis non efficitur id, ultricies vel nibh.
            </p>
          </div>

          <div className="text-white font-inter flex flex-col items-center justify-center space-y-4 border-2 border-red-400 h-full">
            <h1 className="text-2xl border-b-4 border-purple-800 w-fit text-center px-4">
              Skills
            </h1>
            <SkillsCycle />
          </div>
        </div>
      </main>
    </>
  );
}
