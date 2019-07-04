import React from 'react';
import Card from './ProjectCard';
import { Header, Image, Modal} from 'semantic-ui-react';

const RecentWorks = ({work}) => {
  if(!work){return <div>loading</div>};
  //add a card component that has the photo and title of the company/project instead of a button
  return (
    <Modal trigger={<Card work={work}></Card>} closeIcon>
      <Modal.Header>{work.Organization}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='massive' src={require(`../images/${work.Organization}.jpg`)} />
        <Modal.Description>
          <Header>{work.Blurb}</Header>
          <p>
            Bio: {work['Company Bio']}
            <br />
            {work['Start Date']} - {work['Finish Date']}
          </p>
          <p>Accomplishments: {work.Accomplishments}</p>
          <a href={work.Website}>website</a>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default RecentWorks;