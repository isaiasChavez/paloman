import styled from 'styled-components'
export interface PaloManProps {
  position: {},
  test:boolean|null|undefined
}
const HeadPaloman = styled.div`
  width: 25%;
  height: 25%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background:white;
  `
  const BodyPaloman = styled.div`
  width: 5%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 23%;
  left: calc(47.5%);
  background:white;
  `
  const MemberPaloman = styled.div`
  background:white;
  width: 100%;
  height: 70%;
  position: absolute;
  `
  const LeftArmPaloman = styled(MemberPaloman)`
  top:0;
  transform:rotate(-45deg);
  transform-origin:top;  
  `
  const RightArmPaloman = styled(LeftArmPaloman)`
  transform:rotate(45deg);
  `
  const LeftLegPaloman = styled(MemberPaloman)`
  bottom:-65%;
  transform:rotate(-45deg);
  transform-origin:top;  
  `
  const RightLegPaloman = styled(MemberPaloman)`
  bottom:-65%;
  transform:rotate(45deg);
  transform-origin:top;  
  `
  
  
  const PaloMan: React.FC<PaloManProps> = ({ position,test=false }) => {
  return (
    <div style={position} className={`${test?'w-10 h-10':'w-4 h-4'}  fixed `}>
      <HeadPaloman />
      <BodyPaloman >
        <LeftArmPaloman />
        <RightArmPaloman/>
        <LeftLegPaloman/>
        <RightLegPaloman/>
      </BodyPaloman>
    </div>
  )
}

export default PaloMan
