<h2>引入使用</h2>

```html
  <yiyun-customForm
    :title="title"
    :emptyUrl="emptyUrl"
    :form="form"
    :iconList="iconList"
    :componentList="componentList"
    :controlList="controlList"
    @save="save"
  ></yiyun-customForm>
```


<h2>传入数据</h2>

```js
export default {
  name: "CustomForm",
  data() {
    return {
      //自定义表单标题
      title:'报工单设置',
      //表单内容为空时展示的图片
      emptyUrl:require('@/assets/images/logo.png'),
      //表单详情信息
      form: {
        //表头
        head: {
          icon: "https://www.baidu.com/img/flexible/logo/pc/result.png",
          name: "",
          remarks: "",
        },
        //表主体内容
        body: [
 
        ],
      },
      //表单可选图表库
      iconList: ['https://www.baidu.com/img/flexible/logo/pc/result.png','xxx.png'],
      //表单所有可选组件
      componentList: [],
      //表单所有可选控件
      controlList: [],
    };
  },
  methods: {
    //保存表单
    save(data) {
      console.log(data);
    },
  }

};
```
## 控件/组件基础信息(controls)
| 参数名 | 参数说明 | 参数类型 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 控件/组件的显示隐藏 | Boolean | true/false |
| belong | 控件/组件的标识<hr/>(control:控件 component:组件) | String | control/component |
| componentName | 控件名称 | String | / | 
| componentGroupName | 组件名称 | String | / | 
| type | Server端的控件/组件枚举<hr/>(0:批次号) | Number | / |
| icon | 控件/组件图标 | String | / |
| isCustom | 区分是明细控件中默认子控件<hr/>还是新添加的子控件 | Boolean | true/false |
| props | 前端自定义控件规则<hr/>具体规则参考下表 | Object | / |  

## 控件/组件规则(controls>props)
| 参数名 | 参数说明 | 参数类型 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 控件名称 | String | any |
| tip | 控件提示文字 | String | any |
| required | 控件是否必填 | Boolean | true/false | 
| enterType | 输入方式 | String | 手动填写/扫码输入<hr/>单选/自动定位 | 
| textType | 文本样式(文本控件) | String | 单行文本/多行文本 |
| numberType | 数字格式(数字控件) | String | 整数/小数 |
| floatNumber | 小数点位数(数字控件) | String | 1-5 |
| unit | 单位(数字控件) | String | any |
| dateType | 显示方式(日期控件) | String | (年/月/日) / (年/月/日 时:分:秒) |
| isOpen | 默认开关(判断控件) | Boolean | true/false |
| options | 添加选项(单选/多选控件) | Array | [{id:xx,value:xx}] |
| columnList | 显示字段(报工单信息/子批次信息控件) | Array | [{label:x,disabled:x,checked:x,sno:x,value:x}] |
| touchType | 触发方式(明细控件) | String | 直接添加/扫码添加 |
| controlList_default | 默认子控件(明细控件) | Array | 除明细外所有控件 |
| controlList_custom | 自定义子控件(明细控件) | Array | 除明细外所有控件 |
| controlList | 子控件(组件) | Array | 所有控件 |
| config | 控件/组件<hr/>设置项规则<hr/>具体规则参考下表 | Array | / |  

## 控件/组件设置项(props>config)
| 参数名 | 参数说明 | 参数类型 | 可选值 |
| --- | --- | --- | --- | --- |
| required | 控件设置项是否必填 | Boolean | true/false |
| label | 控件设置项名称 | String | any |
| showLabel | 控件设置项是否显示名称 | Boolean | true/false | 
| type | 控件设置项类型 | String | div/input/radio/checkbox<hr/>column/inputButton/tip | 
| value | 控件设置项默认值 | / | 根据控件设置项type而定 |
| options | 控件设置项内容选项 | Array | / |
| config_child | 选择控件设置项内容选项后的展示内容 | Object | / |

::: tip
  此协议仅供前端使用<br/>
  与后端联调需要转换数据结构
:::

## 控件举例
### 文本控件
```json
{
    "show": true,
    "belong": "control",
    "componentName": "文本",
    "type": 9,
    "icon": "",
    "props": {
        "config": [
            {
                "required": true,
                "label": "控件名称",
                "showLabel": true,
                "type": "input",
                "value": "文本"
            },
            {
                "required": true,
                "label": "提示文字",
                "showLabel": true,
                "type": "input",
                "value": "请输入",
                "top": null,
                "left": null
            },
            {
                "required": false,
                "label": "文本样式",
                "showLabel": true,
                "type": "radio",
                "value": "单行文本",
                "options": [
                    {
                        "label": "单行文本",
                        "value": "单行文本"
                    },
                    {
                        "label": "多行文本",
                        "value": "多行文本"
                    }
                ]
            },
            {
                "required": false,
                "label": "是否必填",
                "showLabel": true,
                "type": "checkbox",
                "value": false,
                "options": [
                    {
                        "label": "必填",
                        "value": false
                    }
                ]
            },
            {
                "required": false,
                "label": "控件类型",
                "showLabel": true,
                "type": "div",
                "value": "文本"
            }
        ],
        "name": "文本",
        "tip": "请输入",
        "textType": "单行文本",
        "required": false
    }
}
```
### 报工单信息控件
```json
{
    "show": true,
    "belong": "control",
    "componentName": "报工单信息",
    "type": 19,
    "icon": "",
    "props": {
        "config": [
            {
                "required": false,
                "label": "显示字段",
                "showLabel": true,
                "type": "column",
                "value": [],
                "options": [
                    {
                        "label": "产品名称",
                        "disabled": true,
                        "checked": true,
                        "sno": 1,
                        "value": ""
                    },
                    {
                        "label": "产品编号",
                        "disabled": false,
                        "checked": true,
                        "sno": 2,
                        "value": "CP123456781234567890"
                    },
                    {
                        "label": "产品版本号",
                        "disabled": false,
                        "checked": true,
                        "sno": 3,
                        "value": "BB123456781234567890"
                    },
                    {
                        "label": "工单编号",
                        "disabled": false,
                        "checked": true,
                        "sno": 4,
                        "value": "GD123456781234567890"
                    },
                    {
                        "label": "要求数量",
                        "disabled": false,
                        "checked": true,
                        "sno": 5,
                        "value": "1235个"
                    },
                    {
                        "label": "剩余数量",
                        "disabled": false,
                        "checked": true,
                        "sno": 6,
                        "value": "100个"
                    },
                    {
                        "label": "完成日期",
                        "disabled": false,
                        "checked": true,
                        "sno": 7,
                        "value": "2020/12/12"
                    }
                ]
            },
            {
                "required": false,
                "label": "控件类型",
                "showLabel": true,
                "type": "div",
                "value": "报工单信息"
            }
        ],
        "name": "报工单信息",
        "columnList": [
            {
                "label": "产品名称",
                "disabled": true,
                "checked": true,
                "sno": 1,
                "value": ""
            },
            {
                "label": "产品编号",
                "disabled": false,
                "checked": true,
                "sno": 2,
                "value": "CP123456781234567890"
            },
            {
                "label": "产品版本号",
                "disabled": false,
                "checked": true,
                "sno": 3,
                "value": "BB123456781234567890"
            },
            {
                "label": "工单编号",
                "disabled": false,
                "checked": true,
                "sno": 4,
                "value": "GD123456781234567890"
            },
            {
                "label": "要求数量",
                "disabled": false,
                "checked": true,
                "sno": 5,
                "value": "1235个"
            },
            {
                "label": "剩余数量",
                "disabled": false,
                "checked": true,
                "sno": 6,
                "value": "100个"
            },
            {
                "label": "完成日期",
                "disabled": false,
                "checked": true,
                "sno": 7,
                "value": "2020/12/12"
            }
        ]
    }
}
```
### 子批次信息控件
```json
{
    "show": true,
    "belong": "control",
    "componentName": "子批次信息",
    "type": 18,
    "icon": "",
    "props": {
        "config": [
            {
                "required": false,
                "label": "显示字段",
                "showLabel": true,
                "type": "column",
                "value": [],
                "options": [
                    {
                        "label": "物料名称",
                        "disabled": true,
                        "checked": true,
                        "sno": 1,
                        "value": ""
                    },
                    {
                        "label": "批次号",
                        "disabled": false,
                        "checked": true,
                        "sno": 2,
                        "value": "PC002"
                    },
                    {
                        "label": "子批次号",
                        "disabled": false,
                        "checked": true,
                        "sno": 3,
                        "value": "ZPC003"
                    },
                    {
                        "label": "数量",
                        "disabled": false,
                        "checked": true,
                        "sno": 4,
                        "value": "1234567890个"
                    },
                    {
                        "label": "位置",
                        "disabled": false,
                        "checked": true,
                        "sno": 5,
                        "value": "收料区"
                    },
                    {
                        "label": "质量",
                        "disabled": false,
                        "checked": true,
                        "sno": 6,
                        "value": "待检"
                    },
                    {
                        "label": "批次状态",
                        "disabled": false,
                        "checked": true,
                        "sno": 7,
                        "value": "已批准"
                    },
                    {
                        "label": "上一道工序",
                        "disabled": false,
                        "checked": true,
                        "sno": 8,
                        "value": "压铸"
                    }
                ]
            },
            {
                "required": false,
                "label": "控件类型",
                "showLabel": true,
                "type": "div",
                "value": "子批次信息"
            }
        ],
        "name": "子批次信息",
        "columnList": [
            {
                "label": "物料名称",
                "disabled": true,
                "checked": true,
                "sno": 1,
                "value": ""
            },
            {
                "label": "批次号",
                "disabled": false,
                "checked": true,
                "sno": 2,
                "value": "PC002"
            },
            {
                "label": "子批次号",
                "disabled": false,
                "checked": true,
                "sno": 3,
                "value": "ZPC003"
            },
            {
                "label": "数量",
                "disabled": false,
                "checked": true,
                "sno": 4,
                "value": "1234567890个"
            },
            {
                "label": "位置",
                "disabled": false,
                "checked": true,
                "sno": 5,
                "value": "收料区"
            },
            {
                "label": "质量",
                "disabled": false,
                "checked": true,
                "sno": 6,
                "value": "待检"
            },
            {
                "label": "批次状态",
                "disabled": false,
                "checked": true,
                "sno": 7,
                "value": "已批准"
            },
            {
                "label": "上一道工序",
                "disabled": false,
                "checked": true,
                "sno": 8,
                "value": "压铸"
            }
        ]
    }
}
```

<ClientOnly>
  <customForm-index/>
</ClientOnly>
