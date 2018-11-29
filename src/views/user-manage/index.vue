<!-- -->
<template>
  <el-container class="user-page">
    <el-aside width="200px" class="nav-bar-container">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
          <span>组织结构</span>
        </div>
        <div>
          <el-input v-model="filterText" size="small" placeholder="输入关键字进行过滤" />
          <el-tree
            ref="tree1"
            :data="data1"
            :props="defaultProps"
            :filter-node-method="filterNode"
            class="filter-tree"
            size="mini"
            node-key="id"
            default-expand-all
          />
        </div>
      </el-card>
    </el-aside>
    <el-main>
      <el-container>
        <el-header style="border-bottom:1px solid #f2f2f2">
          <el-button type="primary" size="mini">主要按钮</el-button>
          <el-button size="mini">添加用户</el-button>
          <el-button type="danger" size="mini">删除角色</el-button>
        </el-header>
        <el-main>
          <div class="card-wrapper">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>角色信息</span>
              </div>
              <div class="card-body">
                <el-form ref="form" :model="roleForm" label-width="100px" size="mini">
                  <el-form-item label="编号：">
                    <el-input v-model="roleForm.id" />
                  </el-form-item>
                  <el-form-item label="名称：">
                    <el-input v-model="roleForm.id" />
                  </el-form-item>
                  <el-form-item label="类型：">
                    <el-input v-model="roleForm.id" />
                  </el-form-item>
                  <el-form-item label="顺序：">
                    <el-input v-model="roleForm.id" />
                  </el-form-item>
                  <el-form-item label="活动形式：">
                    <el-input v-model="roleForm.id" type="textarea" />
                  </el-form-item>
                </el-form>
              </div>
              <div class="card-footer">
                <el-button type="primary" class="button" size="small">保存</el-button>
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>菜单权限</span>
              </div>
              <div class="card-body">
                <el-tree
                  ref="tree2"
                  :data="data2"
                  :props="defaultProps"
                  :default-expanded-keys="[6]"
                  node-key="id"
                >
                  <span slot-scope="{ node, data }" class="custom-tree-node">
                    <span>{{ node.label }}</span>
                    <span v-if="!data['children']" class="checkbox-wrapper">
                      <el-checkbox />
                    </span>
                  </span>
                </el-tree>
              </div>
              <div class="card-footer" style="margin-top:18px">
                <el-button type="primary" class="button" size="small">保存</el-button>
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>文档权限</span>
              </div>
              <div class="card-body">
                <el-input v-model="filterText3" size="small" placeholder="输入关键字进行过滤" style="margin-bottom:30px;" />
                <el-tree
                  ref="tree3"
                  :data="data3"
                  :props="defaultProps"
                  :default-expanded-keys="[6]"
                  :filter-node-method="filterNode3"
                  node-key="id"
                >
                  <span slot-scope="{ node, data }" class="custom-tree-node">
                    <span>{{ node.label }}</span>
                    <span v-if="!data['children']" class="checkbox-wrapper">
                      <el-checkbox>编辑</el-checkbox>
                      <el-checkbox>查看</el-checkbox>
                      <el-checkbox>发布</el-checkbox>
                    </span>
                  </span>
                </el-tree>
              </div>
              <div class="card-footer" style="margin-top:18px">
                <el-button type="primary" class="button" size="small">保存</el-button>
              </div>
            </el-card>
          </div>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      filterText: '',
      filterText3: '',
      data1: [{
        id: 1,
        label: '办公室',
        children: [{
          id: 4,
          label: '主任',
          children: [{
            id: 16,
            label: '小智'
          }]
        },
        {
          id: 66,
          label: '副主任',
          children: [
            {
              id: 19,
              label: '小智'
            }
          ]
        },
        {
          id: 5,
          label: '工作人员',
          children: [
            {
              id: 10,
              label: '陈小龙'
            },
            {
              id: 9,
              label: '琳姐'
            }
          ]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      roleForm: {
        id: 1000
      },
      data2: [{
        id: 1,
        label: '公文档案管理',
        children: [{
          id: 4,
          label: '档案信息管理',
          children: [{
            id: 41,
            label: '删除'
          }, {
            id: 42,
            label: '修改'
          }]
        },
        {
          id: 2,
          label: '档案权限管理',
          children: [
            {
              id: 21,
              label: '删除'
            },
            {
              id: 22,
              label: '修改'
            }
          ]
        },
        {
          id: 5,
          label: '用户权限分配',
          children: [
            {
              id: 51,
              label: '删除'
            },
            {
              id: 52,
              label: '修改'
            }
          ]
        }, {
          id: 6,
          label: '操作日志管理',
          children: [
            {
              id: 61,
              label: '删除'
            },
            {
              id: 62,
              label: '修改'
            }
          ]
        }]
      }],
      data3: [{
        id: 1,
        label: '文件机构',
        children: [{
          id: 4,
          label: '文件分组',
          children: [{
            id: 41,
            label: '删除'
          }, {
            id: 42,
            label: '修改'
          }]
        },
        {
          id: 2,
          label: '文件分组',
          children: [
            {
              id: 21,
              label: '删除'
            },
            {
              id: 22,
              label: '修改'
            }
          ]
        }, {
          id: 6,
          label: '文件分组',
          children: [
            {
              id: 61,
              label: '删除'
            },
            {
              id: 62,
              label: '修改'
            }
          ]
        }]
      }]
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree1.filter(val);
    },
    filterText3(val) {
      this.$refs.tree3.filter(val);
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    filterNode3(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
};
</script>

<style scoped lang="scss">
  .user-page {
    background: #fff;
    min-height: calc(100vh - 50px);
  }
  .nav-bar-container{
    min-height: calc(100vh - 50px);
    .el-input{
      margin-bottom: 20px !important;
    }
    .el-card{
      height: 100% !important;
    }
  }
  .card-wrapper{
    display: flex;
    justify-content: space-around;
    .box-card{
      width: 30%;
      min-height: 420px;
      /deep/ .el-card__body{
        padding-bottom: 0 !important;
      }
    }
    .card-body{
      min-height: 340px;
      position: relative;
    }
    .card-footer{
      height: 50px;
      width: 100%;
      box-sizing: border-box;
      border-top: 1px solid #f2f2f2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0;
    }
  }
  .custom-tree-node{
    span{
      font-size: 14px;
    }
  }
  .checkbox-wrapper{
    .el-checkbox+.el-checkbox {
      margin-left: 10px !important;
    }
    .el-checkbox{
      &:first-child{
        margin-left: 50px;
      }
    }
  }
</style>
