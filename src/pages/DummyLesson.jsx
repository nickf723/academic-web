import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import TextBlock from "../components/TextBlock";
import Term from "../components/Term";
import SideNote from "../components/SideNote";
import ImageBlock from "../components/ImageBlock";
import VideoBlock from "../components/VideoBlock";
import Applet from "../components/Applet";
import Quiz from "../components/Quiz";
import BackLinks from "../components/BackLinks";
import OutsideLinks from "../components/OutsideLinks";

export default function DummyLesson() {
  return (
    <div className="p-12 min-h-screen flex justify-center items-start bg-gradient-to-br from-blue-950 via-purple-900 to-slate-950">
        <div className="glass p-10 w-full max-w-4xl shadow-glow">
        <Heading text="Understanding Variables" />
        <Subheading text="The Building Blocks of Algebra" />

        <TextBlock>
          A <Term term="variable" definition="A symbol that represents a number or value" /> is like a placeholder for information that can change.
        </TextBlock>

        <SideNote content="Variables allow equations to represent relationships rather than single values." />

        <ImageBlock
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Algebraic_Expression_example.png"
          caption="An example of variables in an algebraic expression"
        />

        <VideoBlock
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          caption="A sample educational video (placeholder)"
        />

        <Applet name="Equation Balancer" />

        <Quiz
          question="What does the letter x represent in the equation 2x + 3 = 7?"
          options={["The number 7", "A variable", "An operation", "A constant"]}
          answer="A variable"
        />

        <BackLinks
          links={[
            { label: "Expressions", url: "#" },
            { label: "Equations", url: "#" },
          ]}
        />

        <OutsideLinks
          links={[
            { label: "Khan Academy: Variables", url: "https://www.khanacademy.org/math/algebra" },
            { label: "Wikipedia: Variable (Mathematics)", url: "https://en.wikipedia.org/wiki/Variable_(mathematics)" },
          ]}
        />
      </div>
    </div>
  );
}
