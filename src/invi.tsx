
import { Section1 } from './Components/Section1';
import { Section2 } from './Components/Section2';
import { Section3 } from './Components/Section3';
import { Section4 } from './Components/Section4';
import { Section6 } from './Components/Section6';
import { Section7 } from './Components/Section7';
import { Section8 } from './Components/Section8';
import { SectionPopup } from './Components/SectionPopup';

export const Invitation = () => {
    return (
        <div className="ladi-wraper">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section6 />
            <Section7 />
            <Section8 />
            <SectionPopup />
        </div>
    )
}