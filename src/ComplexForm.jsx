import React from 'react';
import produce from 'immer';

export default class ComplexForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'SF',
      employees: [
        {
          name: 'x',
          id: 'x'
        },
        {
          name: 'y',
          id: 'y'
        },
        {
          name: 'z',
          id: 'z'
        },
      ]
    }
  }

  handleChange = ()=>{

  }
  
  render(){
    const { employees, company } = this.state
    return (
      <div>
        Company: {company} <br />
        Employees:
        {employees.map(({id, name}, i)=>{
          return <div key={id}>
              <input
                type="text"
                value={name}
                onChange={(e)=>{
                  // Wrong way: Bad practice to mutate state
                  // employees[i].name = e.target.value;

                  // Short way
                  const newEmployee = produce(employees, (draftEmployees)=>{
                    draftEmployees[i].name = e.target.value;
                  })

                  // Long way
                  // const newEmployee = [...employees];
                  // newEmployee[i] = {
                  //   ...newEmployee[i],
                  //   name: e.target.value,
                  // }
                  this.setState({
                    employees: newEmployee
                  })
                }}
              />
            </div>
        })}
      </div>
    )
  }
}