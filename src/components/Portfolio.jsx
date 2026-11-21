import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import projects from '../data/projects';

// Классовый компонент: единственное место, где хранится состояние
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'All' };
    this.filters = ['All', ...new Set(projects.map((project) => project.category))];
  }

  handleSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  render() {
    const { selected } = this.state;
    const visible =
      selected === 'All'
        ? projects
        : projects.filter((project) => project.category === selected);

    return (
      <div className="portfolio">
        <Toolbar
          filters={this.filters}
          selected={selected}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={visible} />
      </div>
    );
  }
}

export default Portfolio;
