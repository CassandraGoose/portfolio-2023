describe('portfolio', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays my chibi', () => {
    cy.get('img').should('have.attr', 'src').should('contain', 'portrait');
  });

  it('displays intro information in the intro card', () => {
    cy.get('[data-cy="intro-tag"]').should('contain', 'INTRO');
    cy.get('[data-cy="title"]').should('contain', 'CASSANDRA');
    cy.get('[data-cy="label"]').should('contain', 'web developer');
  });

  it('displays about information in the about card', () => {
    cy.get('[data-cy="about-tag"]').should('contain', 'ABOUT');
    cy.get('[data-cy="about-title"]').should('contain', "Hi, I'm Cassandra");
    cy.get('[data-cy="about-details"]').should(
      'contain',
      "I'm a JavaScript developer with a knack for weaving "
    );
    cy.get('[data-cy="github-button"]').should('contain', 'GitHub');
    cy.get('[data-cy="linkedin-button"]').should('contain', 'LinkedIn');
    cy.get('[data-cy="codewars-button"]').should('contain', 'CodeWars');
  });

  it('displays project information in the project card', () => {
    cy.get('[data-cy="project-tag"]').should('contain', 'PRODUCTION APPLICATIONS');
    cy.get('[data-cy="project-title"]').should(
      'contain',
      'I have had the opportunity to work on several production applications in'
    );

    cy.get('[data-cy="personal-project-tag').should('contain', 'PERSONAL PROJECTS');
    cy.get('[data-cy="personal-project-title"]').should(
      'contain',
      'I tend to build projects to learn something'
    );
    cy.get('[data-cy="project-details-title"]').should('have.length', 9);
    cy.get('[data-cy="project-details-title"]')
      .eq(1)
      .should('contain', 'Higher Education');
    cy.get('[data-cy="project-details-title"]')
      .eq(1)
      .siblings('p')
      .eq(0)
      .should('contain', 'React, JSS, Node,');
  });

  it('displays skills information in the skills card', () => {
    cy.get('[data-cy="skill-tag"]').should('contain', 'SKILLS');
    cy.get('[data-cy="skill-details-title"]').should('have.length', 8);
    cy.get('[data-cy="skill-details-title"]')
      .eq(1)
      .should('contain', 'BACK END');
    cy.get('[data-cy="skill"]').should('have.length', 60);
  });

  it('displays work information in the work card', () => {
    cy.get('[data-cy="work-tag"]').should('contain', 'WORK EXPERIENCE');
    cy.get('[data-cy="work-title"]').should(
      'contain',
      'I have experience as an individually contributing'
    );
    cy.get('[data-cy="work-list"] > li').should('have.length', 4);
    cy.get('[data-cy="work-list"] > li').eq(2).should('contain', 'Front End');
  });

  it('displays volunteer information in the volunteer card', () => {
    cy.get('[data-cy="volunteer-tag"]').should(
      'contain',
      'VOLUNTEER EXPERIENCE'
    );
    cy.get('[data-cy="volunteer-list"] > li').should('have.length', 3);
    cy.get('[data-cy="volunteer-list"] > li')
      .eq(2)
      .should('contain', 'ChickTech');
  });

  it('displays talk information in the talk card', () => {
    cy.get('[data-cy="talks-tag"]').should('contain', 'TALKS');
    cy.get('[data-cy="talks-title"]').should(
      'contain',
      'I like to give meetup and conference talks whenever I am able to!'
    );
    cy.get('[data-cy="talks-list"] > li').should('have.length', 8);
    cy.get('[data-cy="talks-list"] > li').eq(6).should('contain', 'Vue Slots');
  });

  it('displays education information in the education card', () => {
    cy.get('[data-cy="education-tag"]').should(
      'contain',
      'EDUCATION & LEARNING'
    );
    cy.get('[data-cy="education-title"]').should(
      'contain',
      "I've had some formal education and some of that has been on"
    );
    cy.get('[data-cy="formal-education-list"]')
      .children()
      .should('have.length', 2);
    cy.get('[data-cy="formal-education-list"]')
      .children()
      .eq(1)
      .should('contain', 'Bachelor');
    cy.get('[data-cy="education-list"]').children().should('have.length', 6);
    cy.get('[data-cy="education-list"]')
      .children()
      .eq(4)
      .should('contain', 'Steps In Japanese');
  });
});
