<template>
  <div class="edit-page">
    <sticky :class-name="subNavbar">
      <el-button @click="editHisDialog = true">查看修改记录</el-button>
      <el-button @click="transmitDialog = true">转发</el-button>
      <el-button @click="powerDialog = true">权限</el-button>
      <el-button type="primary" @click="showEdit = false">保存</el-button>
      <el-button type="success">发布</el-button>
    </sticky>
    <div class="article-time">
      档案信息管理／当前文件名   最近保存时间:2018-10-30 15:21
    </div>
    <div class="createPost-main-container">
      <div v-show="!showEdit" class="div-content" v-html="content" />
      <quill-editor v-show="showEdit" ref="myQuillEditor" v-model="content" :options="editorOption" class="editer" @ready="onEditorReady($event)" />
    </div>
    <!-- 固定右边 -->
    <fix-right @handleEdit="showEdit = true" />
    <!-- 显示历史记录 -->
    <his-edit-dialog :show.sync="editHisDialog" title="文档历史修订记录" />
    <!-- 转发文件 -->
    <transmit :show.sync="transmitDialog" title="转发文件" />
    <!-- 文件权限分配 -->
    <power-assign :show.sync="powerDialog" title="文件权限分配" />
  </div>
</template>
<script>
import Sticky from '@/components/Sticky' // 粘性header组件
import { quillEditor } from 'vue-quill-editor'; // 调用编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import FixRight from './components/FixRight/index'
import HisEditDialog from './components/HisEditDialog/index'
import Transmit from '@/components/Transmit/index'
import PowerAssign from './components/PowerAssign/index'
export default {
  components: {
    Sticky,
    quillEditor,
    FixRight,
    HisEditDialog,
    Transmit,
    PowerAssign
  },
  data() {
    return {
      subNavbar: 'sub-navbar',
      showEdit: false,
      editHisDialog: false, // 修改记录弹框
      transmitDialog: false, // 转发文件
      powerDialog: false, // 文件权限
      content: `<div id="u520" class="ax_default _文本段落">
              <div id="u520_div" class=""></div>
              <div id="u520_text" class="text ">
                <p style="font-size:18px;text-align:center;"><span style="font-family:'Arial Negreta', 'Arial Normal', 'Arial';font-weight:700;">泉州港水运工程生产安全重大事故隐患</span></p><p style="font-size:18px;text-align:center;"><span style="font-family:'Arial Negreta', 'Arial Normal', 'Arial';font-weight:700;">排查治理挂牌督办实施办法（试行）</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;"><br></span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第一条 为推动辖区水运工程落实泉州港水运工程生产安全重大事故隐患排查治理责任，树立“隐患就是事故”的预防理念，建立水运工程生产安全事故隐患排查治理的长效机制，积极防范和有效遏制事故的发生，根据交通运输部《公路水运工程生产安全重大事故隐患挂牌督办制度（暂行）》、交通运输部《公路水运工程安全生产监督管理办法》、《福建省交通运输安全生产挂牌督办办法》等有关规定，制定本办法。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">本办法所称重大事故隐患是指水运工程施工过程中存在的危害和整改难度较大，需要局部或者全部停止作业，并经过一定时间整改治理方能消除的事故隐患，或者因外部因素影响致使生产经营单位自身难以消除的事故隐患。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第二条 福建省泉州港口管理局对以下重大隐患实行挂牌督办：</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">（一）省交通运输厅、省港航局、市政府等单位督查或巡视发现的重大隐患；</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">（二）企业或个人报告或举报并经查实的重大隐患；</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">（三）同级安全监管部门移交的重大隐患；</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">（四）其他需要挂牌督办的重大安全生产问题。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第三条 福建省泉州港口管理局负责本辖区水运工程生产安全重大事故隐患排查治理挂牌督办管理工作。局相关处室、局属有关单位（以下简称“挂牌督办单位”），根据职责分工和管理权限，具体实施管辖范围内的挂牌督办工作。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">涉及跨地区、跨部门的工程项目存在重大隐患和问题特别严重、可能导致重特大事故或重大不良社会影响的重大隐患，可视情况上报省交通运输厅或同级政府安全生产委员会挂牌督办。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">重大隐患应由其他部门处理的，移送其他部门并登记备查。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">&nbsp;&nbsp;&nbsp; 第四条 挂牌督办程序包括：核实挂牌督办信息、送达挂牌督办通知书、督促整改、下发解除挂牌督办通知书。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">按照“一岗双责”和“管行业必须管安全，管业务必须管安全，管生产经营必须管安全”的要求，本局挂牌督办的水运工程生产安全重大事故隐患事项由局相关处室、局属有关单位及时提出，报局领导批准，以局名义挂牌督办，并由提出的处室、单位负责跟踪督办。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第五条 水运工程项目施工单位是水运工程生产安全重大事故隐患排查、治理和防控的责任主体，应当建立健全重大事故隐患排查治理工作制度。企业及工程项目的主要负责人对所承建水运工程项目的重大事故隐患排查治理工作全面负责。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第六条 水运工程施工单位应当定期组织安全生产管理人员、工程技术人员和其他相关人员排查工程项目的重大事故隐患，特别是对水上作业、大型起重吊装作业、深基坑作业、高支模作业等技术难度大、风险大的重要工程施工作业应重点定期排查。对排查出的重大事故隐患，应及时实施治理消除。不能立即消除的，在施工现场要设立风险告知牌和警戒区，告知作业人员风险，暂停该区域作业。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第七条 水运工程施工单位应及时将工程项目重大事故隐患排查治理的有关情况向建设单位报告。建设单位应积极协调勘察、设计、施工、监理等单位，并在资金、人员等方面积极配合做好重大事故隐患排查治理工作。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第八条 水运工程生产安全重大事故隐患治理挂牌督办按照“谁存在事故隐患，谁负责治理整改”原则，实行“业主组织、监理督促、施工治理”的工作机制。参与各方应确保隐患排查登记、公示公告、治理销号等过程闭合，档案完整。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第九条 福建省泉州港口管理局督查发现或接到工程项目重大事故隐患举报经核实的，应及时向该工程建设单位下达《泉州港水运工程生产安全重大事故隐患治理挂牌督办通知书》（以下简称《挂牌督办通知书》）（见附件1），工程项目实施总承包或代建制的，挂牌督办通知书则下发给项目总承包单位或项目代建单位。同时在网站上公开有关督办信息，公布举报电话和邮箱，接受社会监督。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第十条 《挂牌督办通知书》包括下列内容：</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">（一）工程项目的名称，建设、施工和监理单位名称；</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">（二）重大事故隐患的具体内容，包括隐患的类型、部位、违反的法律法规和标准规范条文等；</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">（三）治理整改要求及期限；</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">（四）督办解除的程序；</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">（五）其他有关的要求。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第十一条 项目建设单位接到《挂牌督办通知书》后，应及时将挂牌督办通知书转达给项目施工单位并告知项目监理单位，同时要立即组织和督促项目施工单位进行治理整改。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第十二条 项目施工单位要结合施工项目特点制定重大事故隐患治理整改方案，明确治理责任、目标、任务、方法、措施、资金、物资、人员、期限、安全措施、应急预案和过程监控等要求。监理单位对重大事故隐患治理整改要全过程进行监理，确认重大事故隐患消除后，上报建设单位确认，由建设单位向挂牌督办单位报送整改报告，并书面提请解除督办。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第十三条 项目施工单位在重大隐患治理过程中，应当采取相应的安全防范措施。重大隐患排除前或者排除过程中无法保证安全的，应当从危险区域内撤出作业人员，并疏散可能危及的其他人员，设置警戒标志，暂时局部或全部停工；对暂时难以停工或者停止使用的设施、设备，应当加强监测与维护，防止意外事故发生。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第十四条 挂牌督办单位收到建设单位提出的重大事故隐患解除督办申请后，根据“谁督办，谁复查”的原则，挂牌督办单位应当进行现场复查。复查合格的，依照规定下发《解除挂牌督办通知书》（见附件2），解除督办。复查不合格的，继续实施挂牌督办。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第十五条 施工单位不认真执行《挂牌督办通知书》的，福建省泉州港口管理局依法责令其整改。对未按《挂牌督办通知书》要求进行整改或经2次以上整改仍不符合要求的，挂牌督办单位应当给予被挂牌督办单位通报批评、约谈、列入重点监管名单或港口经营人信用黑名单，在信用考核时对项目各参建单位予以扣分，并上报省交通运输厅直接考核定级。情节严重的依法责令停工整改；不认真整改导致生产安全事故发生的，依法进行行政处罚和追究企业和相关负责人的责任。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第十六条 挂牌督办单位应建立挂牌督办管理台账和管理档案，填写挂牌督办记录（见附件3）后由专人负责档案管理工作。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第十七条 本实施办法由福建省泉州港口管理局负责解释。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">第十八条 本实施办法自印发之日起施行。</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;"><br></span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;"><br></span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">&nbsp;&nbsp;&nbsp; 附件：1.泉州港水运工程生产安全重大事故隐患治理挂牌督办通知书</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2.解除挂牌督办通知书</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3.泉州港水运工程生产安全重大事故隐患排查治理挂牌督办记录</span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;"><br></span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;"><br></span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style="font-family:'Arial Negreta', 'Arial Normal', 'Arial';font-weight:700;">福建省泉州港口管理局&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Negreta', 'Arial Normal', 'Arial';font-weight:700;">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 2018年9月13日印发</span><span style="font-family:'Arial Normal', 'Arial';font-weight:400;">&nbsp; </span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;"><br></span></p><p style="font-size:13px;text-align:left;"><span style="font-family:'Arial Normal', 'Arial';font-weight:400;"><br></span></p>
              </div>
            </div>`,
      editorOption: {}
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorReady(editor) {}
  }
}
</script>
<style scope lang="scss">
  .sub-navbar{
    text-align: right;
    align-items: center;
    background: #f4f4f4;
    height: 50px;
  }
  .edit-page{
    min-height: calc(100vh - 50px);
    background: #fff;
  }
  .article-time{
    border-top: 1px solid #ccc;
    font-size: 13px;
    color: #666;
    height: 35px;
    display: flex;
    background: #f4f4f4;
    align-items: center;
  }
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
  }
  .div-content{
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    line-height: 27px;
  }
</style>
