import React from 'react';
import { Table } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dataSource = [
      {
        key: '1',
        rowName: 'Подъездная дорога от 1-го Успенского шоссе (км 1+600) (строительство)',
        children: [
          {
            key: '1-1',
            rowName: 'км',
            planBefore2010: 0.0,
            factBefore2010: 0.0,

            poYear2010: 0.0,
            ostYear2010: 0.0,
            planYear2010: 0.0,
            factYear2010: 0.0,

            poYear2011: 0.0,
            ostYear2011: 0.0,
            planYear2011: 0.0,
            factYear2011: 0.0
          },

          {
            key: '1-2',
            rowName: 'тыс. кв. км',
            planBefore2010: 0.0,
            factBefore2010: 0.0,

            poYear2010: 0.0,
            ostYear2010: 0.0,
            planYear2010: 0.0,
            factYear2010: 0.0,

            poYear2011: 0.0,
            ostYear2011: 0.0,
            planYear2011: 0.0,
            factYear2011: 0.0
          }
        ]
      }
    ];

    const columns = [
      { title: '', dataIndex: 'rowName', key: 'rowName' },

      {
        title: 'До 2010',
        dataIndex: 'before2010',
        key: 'before2010',
        children: [
          { title: 'План', dataIndex: 'planBefore2010', key: 'planBefore2010' },
          { title: 'Факт', dataIndex: 'factBefore2010', key: 'factBefore2010' }
        ]
      },

      {
        title: '2010',
        dataIndex: 'year2010',
        key: 'year2010',
        children: [
          { title: 'П+О', dataIndex: 'poYear2010', key: 'poYear2010' },
          { title: 'Ост', dataIndex: 'ostYear2010', key: 'ostYear2010' },
          { title: 'План', dataIndex: 'planYear2010', key: 'planYear2010' },
          { title: 'Факт', dataIndex: 'factYear2010', key: 'factYear2010' }
        ]
      },

      {
        title: '2011',
        dataIndex: 'year2011',
        key: 'year2011',
        children: [
          { title: 'П+О', dataIndex: 'poYear2011', key: 'poYear2011' },
          { title: 'Ост', dataIndex: 'ostYear2011', key: 'ostYear2011' },
          { title: 'План', dataIndex: 'planYear2011', key: 'planYear2011' },
          { title: 'Факт', dataIndex: 'factYear2011', key: 'factYear2011' }
        ]
      }
    ];

    return <Table dataSource={dataSource} columns={columns} bordered />;
  }
}

export default App;
