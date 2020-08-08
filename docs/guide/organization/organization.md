<h2>引入使用</h2>

```html
  <yiyun-Organization
    :isOpen="isOpen"
    :departmentList="departmentList"
    :memberList="memberList"
    :choosedList="choosedList"
    @confirm="confirm"
    @close="close"
  ></yiyun-Organization>
```

<h2>传入数据</h2>

```js
export default {
  name: "Organization",
  data() {
    return {
      //部门列表
      departmentList: [
        { id: "1211841814905937920", name: "前端", parentId: "" },
        { id: "1211841850901454848", name: "后端", parentId: "" },
        { id: "1211841869964566528", name: "测试", parentId: "" },
        { id: "1211841888960569344", name: "ui", parentId: "" },
        { id: "1211841925199355904", name: "产品", parentId: "" },
        {
          id: "1214479916065128448",
          name: "销售",
          parentId: "1211841925199355904",
        },
      ],
      //成员列表
      memberList: [
        {
          id: "1178593554835001344",
          name: "李姜侠02",
          icon: null,
          active: true,
          // deptIdList: [],
        },
        {
          id: "1214479701862023168",
          name: "李诗瑜",
          icon:
            "https://dl-platform.effio.cn/1214708162554937344/user-head/133571917231583739623418.png",
          active: true,
          deptIdList: [
            "1211841814905937920",
            "1211841850901454848",
            "1211841869964566528",
          ],
        },
        {
          id: "3rbrT78FZYT",
          name: "钟超",
          icon:
            "https://dl-platform.effio.cn/3geFfAPn4mM/user-head/135808002901572240468200.jpg",
          active: true,
          deptIdList: ["1211841814905937920"],
        },
        {
          id: "3rr5B7hdypT",
          name: "李琪",
          icon: null,
          active: true,
          deptIdList: ["1211841869964566528"],
        },
        {
          id: "3rwe3y6berK",
          name: "李姜侠",
          icon:
            "https://dl-platform.effio.cn/3hjcSriafM9/user-head/9a6c021a-dc77-45ff-baf6-ab130f5a355b.jpg",
          active: true,
          deptIdList: ["1211841814905937920"],
        },
        {
          id: "3sHRBhg6F2P",
          name: "叶丹",
          icon: null,
          active: true,
          deptIdList: ["1211841888960569344"],
        },
        {
          id: "3sLP7bNgKnX",
          name: "小李的新测试账号1",
          icon:
            "https://dl-platform.effio.cn/3sLNrqNJUBy/user-head/a9aa371b-bbc0-481b-b59a-4ea220ba6c50.jpg",
          active: true,
          deptIdList: ["1211841814905937920"],
        },
        {
          id: "3sLQC8LCJvK",
          name: "小李的测试账号2",
          icon: null,
          active: true,
          deptIdList: ["1211841850901454848"],
        },
        {
          id: "3sLXki4LTNF",
          name: "小迪",
          icon: null,
          active: true,
          deptIdList: ["1211841850901454848"],
        },
        {
          id: "3sXXRhnzzdV",
          name: "葛宇杰",
          icon:
            "https://dl-platform.effio.cn/6f5fd011-4dee-42c5-b6ce-3dba3b0209bd/user-head/178558276421571880647742.jpg",
          active: true,
          deptIdList: ["1211841869964566528"],
        },
        {
          id: "3sXes3J6iAT",
          name: "顾静微",
          icon:
            "https://dl-platform.effio.cn/e184a940-12d6-44b7-906f-556ef1180654/user-head/ab67f1c4-091e-403a-a989-b4e75dd1b1a3.jpg",
          active: true,
          deptIdList: ["1211841850901454848"],
        },
        {
          id: "3siEAoJu49M",
          name: "牟皋",
          icon:
            "https://dl-platform.effio.cn/95cd1c79-2681-40a6-b652-7a69a5cd17f6/user-head/180742054111569741307285.jpg",
          active: true,
          deptIdList: ["1211841850901454848"],
        },
        {
          id: "3ucoQs6eKsD",
          name: "刘鑫",
          icon:
            "https://dl-platform.effio.cn/3ucoGEE1GKZ/user-head/70f9c204-a6f3-4061-8530-9ae2971111ce.jpg",
          active: true,
          deptIdList: ["1211841869964566528"],
        },
        {
          id: "3umB2u9zbTm",
          name: "王佳丽",
          icon: null,
          active: true,
          deptIdList: ["1211841814905937920"],
        },
        {
          id: "3y5kpMb59wd",
          name: "任世浩",
          icon: null,
          active: true,
          deptIdList: ["1211841814905937920"],
        },
      ],
      //已选成员
      choosedList: [
        {
          id: "3rbrT78FZYT",
          name: "钟超",
        },
        {
          id: "3rr5B7hdypT",
          name: "李琪",
        },
      ],
      //是否打开组织架构
      isOpen: false,
    };
  },
  methods: {
    //确定选择
    confirm(choosedList) {
      console.log("被选择成员", choosedList);
    },
    //关闭弹框
    close() {
      this.isOpen = false;
    },
  },
};
```

<ClientOnly>
  <organization-index/>
</ClientOnly>