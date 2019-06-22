import React from 'react';
import { Card } from 'semantic-ui-react';

const ProjectCard = ({work,...rest}) => {
  console.log(work);
  return (
    <Card
      /*href='#card-example-link-card'*/
      header={work.Organization}
      image={require(`../images/${work.Organization}.jpg`)}
      description={work.Blurb}
      centered='True'
      {...rest}
    />
  );
}
export default ProjectCard;
