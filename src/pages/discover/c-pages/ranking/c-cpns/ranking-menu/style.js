import styled from "styled-components";

export const MHRankingMenuWrapper = styled.div`
  margin-top: 20px;
  .menu-title {
    h2 {
      padding: 0 10px 12px 15px;
      font-size: 14px;
      color: #000;
      font-family: simsun, 宋体;
      font-weight: bolder;
    }
  }
  .menu-list-item {
    padding: 10px 0 10px 20px;
    display: flex;
    .item-info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item-name {
        color: #000;
      }
      .item-describe {
        color: #999;
      }
    }
    &:hover {
      cursor: pointer;
      background-color: #f4f2f2;
    }
    &.active {
      background-color: #e6e6e6;
    }
  }
`;