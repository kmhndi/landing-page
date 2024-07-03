import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
       
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Welcome to\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="Reform"
        button={
          <Link href="https://www.instagram.com/brightfuture.qa">
            <Button xl>Bright Future Instagram</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
