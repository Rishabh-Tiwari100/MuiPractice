import React, { Component } from "react";
import ReactECharts from "echarts-for-react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default class Content extends Component {
constructor(props) {
  super(props);
  this.state = {
    Yearly : "",
    option : {
      title: {
        text: 'services statistics'
      },
      legend: {
        data: ['ongoing', 'completed'],
        orient: 'horizontal',
        right: 200,
        top: 10
      },
      xAxis: {
        type: 'category',
        data: [
          2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
        ]
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      series: [
        {
          name: 'ongoing',
          type: 'bar',
          data: [65, 45, 15, 90, 70, 25, 15, 90, 70, 25, 70, 25],
          itemStyle: {
            color: 'skyblue',
            barBorderRadius: [25, 25, 0, 0]
          }
        },
        {
          name: 'completed',
          type: 'bar',
          data: [25, 60, 35, 65, 40, 5, 35, 70, 40, 5, 40, 5],
          itemStyle: {
            barBorderRadius: [25, 25, 0, 0]
          }
        }
      ]
    }}

}

  handleChange =(e) => {
      this.setState({
        Yearly : e.target.value,
      })
  }




  render() {
    return (
      <div className="contentContainer" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",minWidth:'650px',position:"relative"}}>
       
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Yearly</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.Yearly}
          label="Yearly"
          onChange={this.handleChange}
        >
          <MenuItem value={2012}>2012</MenuItem>
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box style={{minWidth:"650px",height:"600px",margin:"20px",}}>

<ReactECharts option={this.state.option} />
</Box>
      </div>
    );
  }
}
