// import Arrow from "@atoms/ArrowLeft";
// import Background from "@atoms/Background";
// import Button from "@atoms/Button";
// import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import Button from "@molecules/Button";
import Card from "@molecules/Card";
import Container from "@organisms/Container";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function TrophicLevel() {

  const [selected, setSelected] = useState('Deep Ocean'); 

  return (
  <>
    <Container>
      <Text className={styles[`TrophicLevel__Title`]} style="italic" color="darkBlue" size="XLarge">Trophic Level</Text>
      <Text className={styles[`TrophicLevel__Paragraph`]} size="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero metus, fermentum et ex eu, vestibulum placerat enim. Ut turpis justo, lacinia non justo egestas, pretium vehicula lectus. Suspendisse ut eleifend justo, id consequat ex.</Text>

        <div className={styles[`TrophicLevel__ContainerCard`]}>
          <Card
            href="#Text"
            title="Deep Ocean"
            color="oliveGreen"
            description="Below 200 meters"
            onClick={() => setSelected("Deep Ocean")}
            img="/assets/images/icons/deep_ocean.svg"
            state={selected}
          />
          <Card
            href="#Text"
            title="Arctic Ocean"
            color="oliveGreen"
            description="Coldest waters"
            onClick={() => setSelected("Arctic Ocean")}
            img="/assets/images/icons/artic_ocean.svg"
            state={selected}
          />
          <Card
            href="#Text"
            title="Pelagic Ocean"
            color="oliveGreen"
            description="Where light meets water"
            onClick={() => setSelected("Pelagic Ocean")}
            img="/assets/images/icons/pelagic_ocean.svg"
            state={selected}
          />
          <Button
            href=""
            color="oliveGreen"
            title="Deep Ocean"
            description="Below 200 meters"
            img="/assets/images/icons/deep_ocean.svg"
          />
          <Button
            href=""
            color="oliveGreen"
            description="Coldest waters"
            img="/assets/images/icons/artic_ocean.svg"
            title="Arctic Ocean"
          />
          <Button
            href=""
            color="oliveGreen"
            description="Where light meets water"
            img="/assets/images/icons/pelagic_ocean.svg"
            title="Pelagic Ocean"
          />
        </div>
        
        <div className={styles[`TrophicLevel__ContainerText`]}>
          {selected === 'Deep Ocean' && <Text className={styles[`TrophicLevel__ContainerText__Title`]}>Deep Ocean</Text>}
          {selected === 'Arctic Ocean' && <Text className={styles[`TrophicLevel__ContainerText__Title`]}>Arctic Ocean</Text>}
          {selected === 'Pelagic Ocean' && <Text className={styles[`TrophicLevel__ContainerText__Title`]}>Pelagic Ocean</Text>}
          <Text id="Text" size="large" className={styles[`TrophicLevel__ContainerText__Paragraph`]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero metus, fermentum et ex eu, vestibulum placerat enim. Ut turpis justo, lacinia non justo egestas, pretium vehicula lectus. Suspendisse ut eleifend justo, id consequat ex.</Text>
        </div>

        <div className={styles[`TrophicLevel__ContainerMobile`]}>
          <Text  className={styles[`TrophicLevel__ContainerMobile__Title`]}>Deep Ocean</Text>
          <img src="/assets/images/foodChain/deepOceanMobile.png" alt="" />
          <Text className={styles[`TrophicLevel__ContainerMobile__Paragraph`]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero metus, fermentum et ex eu, vestibulum placerat enim. Ut turpis justo, lacinia non justo egestas, pretium vehicula lectus. Suspendisse ut eleifend justo, id consequat ex.</Text>
          <Text className={styles[`TrophicLevel__ContainerMobile__Title`]}>Arctic Ocean</Text>
          <img src="/assets/images/foodChain/arcticOceanMobile.png" alt="" />
          <Text className={styles[`TrophicLevel__ContainerMobile__Paragraph`]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero metus, fermentum et ex eu, vestibulum placerat enim. Ut turpis justo, lacinia non justo egestas, pretium vehicula lectus. Suspendisse ut eleifend justo, id consequat ex.</Text>
          <Text className={styles[`TrophicLevel__ContainerMobile__Title`]}>Pelagic Ocean</Text>
          <img src="/assets/images/foodChain/pelagicOceanMobile.png" alt="" />
          <Text className={styles[`TrophicLevel__ContainerMobile__Paragraph`]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero metus, fermentum et ex eu, vestibulum placerat enim. Ut turpis justo, lacinia non justo egestas, pretium vehicula lectus. Suspendisse ut eleifend justo, id consequat ex.</Text>
        </div>

        <div className={styles[`TrophicLevel__ContainerImage`]}>
          {selected === 'Deep Ocean' && <img src="/assets/images/foodChain/deepOceanDesktopjpg.jpg" alt="" />}
          {selected === 'Arctic Ocean' && <img src="/assets/images/foodChain/arcticOceanDesktop.png" alt="" />}
          {selected === 'Pelagic Ocean' && <img src="/assets/images/foodChain/pelagicOceanDesktop.png" alt="" />}
        </div>
    </Container>
  </>
  );
}
