import styles from './index.less';
import LayoutTopSide from './LayoutTopSide';
import { useState } from "react";
import { Divider, Input as AntdInput } from "antd";
import Cron, { CronError, CronProps } from "react-js-cron";
import "antd/dist/antd.css";
import { InfoCircleOutlined } from '@ant-design/icons';
import useCronReducer from 'react-js-cron';


export default function IndexPage() {

  const defaultValue = '30 5 * * 1,6'

  let props : CronProps = {
    value:defaultValue,
    setValue:(defaultValue:string)=>{}
  }

  const [values, dispatchValues] = useCronReducer(props)
  const [error, onError] = useState<CronError>()


  return (
    <div>
      <div>
      <AntdInput
        value={values.inputValue}
        onChange={(event) => {
          dispatchValues({
            type: 'set_input_value',
            value: event.target.value,
          })
        }}
        onBlur={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
        onPressEnter={() => {
          dispatchValues({
            type: 'set_cron_value',
            value: values.inputValue,
          })
        }}
      />

      <Divider>OR</Divider>

      <Cron
        value={values.cronValue}
        setValue={(newValue: string) => {
          dispatchValues({
            type: 'set_values',
            value: newValue,
          })
        }}
        onError={onError}
      />

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          Double click on a dropdown option to automatically select / unselect a
          periodicity
        </span>
      </div>

      <p style={{ marginTop: 20 }}>
        Error: {error ? error.description : 'undefined'}
      </p>
    </div>
    </div>
  );
}
