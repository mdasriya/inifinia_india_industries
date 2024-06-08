import image1 from "../assets/img/metal (1).jpg";
import image2 from '../assets/img/cladding.jpg';
import image3 from '../assets/img/cladding3.jpg';
import image4 from '../assets/img/9.jpg';
import Transition from "../components/Transition";


const features = [
  {
    name: "1. WM01 Boards / Panels",
    description1: "1.1 WM01A Plain Regular Boards Variants - Colours, Sizes",
    description2: "1.2 WM01B 3Layer Boards Variants - Colours, Sizes",
    description3: "1.3 WM01C 3D Panels  Variants - Colours, Sizes, Designs",
  },
  {
    name: "2. WM02 Doors",
    description1: "2.1 WM02A Flush Doors Variants- Colours, Sizes, Designs",
    description2: "2.2 WM02B Panel Doors  Variants- Colours, Sizes, Designs",
    description3: "2.3 WM02C Moulded Doors Variants- Colours, Sizes, Designs  ",
  },
  {
    name: "3. WM03 Door Frames",
    description1: "3.1 WM03A 3x2",
    description2: "3.1.1 WM03A-D01 3x2 SMG",
    description3:
      "3.1.2 WM03A-D02 3x2 SPP Variants - Colours, Sizes(lengths)    ",
    description4: "3.2 WM03B 4x2",
    description5: "3.2.1 WM03B-D01 4x2 SMG",
    description6: "3.2.2 WM03B-D02 4x2 SPP Variants - Colours, Sizes(lengths)",
    description7: "3.3 WM03C 4x2.5",
    description8: "3.3.1 WM03C-D01 4x2.5 SMG",
    description9: "3.3.2 WM03C-D02 4x2.5 SMP",
    description10: "3.3.2 WM03C-D02 5x2.5 SMP",

    description11:
      "3.3.3 WM03C-D03 4x2.5 SPP Variants - Colours, Sizes(lengths)",
    description12: "3.4 WM03D 5x2.5",
    description13: "3.4.1 WM03D-D01 5x2.5 SMG ",
    description14: "3.4.2 WM03D-D02 5x2.5 SPP",
    description15:
      "3.4.3 WM03D-D03 5x2.5 DPG  Variants - Colours, Sizes(lengths)",
  },
  {
    name: "4. WM04 Window Profiles",
    description1: "4.1 WM04A Casement Window Profiles",
  },
  {
    name: "5. WM05 UPR Window Profiles",
    description1: "5.1 WM05A UPR Sliding Window",
    description2: "5.1.1 WM05A-D01 Track Profiles 75x35 2 Track ",
    description3: "5.1.2 WM05A-D02 Track Profiles 105x35 3 Track",
    description4: "5.1.3 WM05A-D03 Sach Profiles 50x25 PL",
    description5: "5.1.4 WM05A-D04 Sach Profiles 50x25 IL ",
    description6: "5.1.5 WM05A-D05 Sach Profiles 50x25 BS",
    description7:"5.1.6 WM05A-D06 Sash Profiles 75x25 PL Variants - Colours, Sizes(lengths) ",
    description9: "5.2 WM05B UPR Casement Window ",
    description10: "5.2.1 WM05B-D01 Frame Profiles 98x45 SPP",
    description11: "5.2.2 WM05B-D02 Frame Profiles 98x45 SPPD ",
    description12: "5.2.3 WM05B-D03 Sach Profiles 50x25 PL    ",
    description13: "5.2.4 WM05B-D04 Sach Profiles 75x25 PL ",
    description14: "5.2.5 WM05B-D05 Sach Profiles 50x25 OL",
    description15: "5.2.6 WM05B-D06 Sach Profiles 75x25 OL Variants - Colours, Sizes(lengths) ",
  },
  {
    name: "6. WM06 Planks, Battens & Strips",
    description1: "6.1 WM06A WPC Planks",
    description2: "6.1.1 WM06A-D01 Plain Planks",
    description3:"6.1.2 WM06A-D02 Textured Planks Variants - Colours, Sizes(lengths)",
  },
];

function Woodmagix() {
  return (
    <div className="bg-white con-bg">
        <div className='flex items-center w-auto text-center door wood'>
        <h3 className="text-5xl font-extrabold tracking-normal text-center z-1 text-white">Woodmagix</h3>
      </div>
      <div className="mx-auto grid  max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Woodmagix
          </h2>
          <p className="mt-4 text-gray-500">
            <h2>Benefits of Using WPC Door Frames</h2>
            <ol>
            <li> 1. Durability Life Long </li>
            <li> 2. Low maintenance </li>
            <li> 3. Resistance to moisture</li>
            <li> 4. Resistance to insects </li>
            <li> 5. 100% Termite & Borer resistant.</li>
            </ol>

          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 p-3 shadow-2">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description1}
                </dd>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description2}
                </dd>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description3}
                </dd>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description4}
                </dd>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description5}
                </dd>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description6}
                </dd>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description8}
                </dd>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description9}
                </dd>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description10}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 m-auto mt-10">
          <img
              src={image1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
             src={image2}
            alt="Top down view of walnut card tray with embedded magnets and card."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
             src={image3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 shadow img"
          />
          <img
             src={image4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 shadow img"
          />
        </div>
      </div>
    </div>
  );
}

export default Transition(Woodmagix);
