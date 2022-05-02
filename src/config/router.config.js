/*
 * @LastEditTime: 2022-05-03 03:41:13
 * @Description: 路由配置
 * @Date: 2022-03-17 00:30:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import loadable from '@loadable/component'

import BasicLayout from '@/layout/BasicLayout'

import PageView from '@/layout/PageView'
import UsesrLayout from '@/layout/UserLayout'

// 本地公共路由
export const constantRouterMap = [
    //登录
    {
        name: 'login-layout',
        component: UsesrLayout,
        redirect: '/login',
        children: [
            {
                path: 'login',
                name: 'Login',
                component: loadable(() =>
                    import(/*webpackChunkName: "Login" */ '@/pages/login/index')
                )
            }
        ]
    },

    // 异常页
    {
        path: '/404',
        name: 'exception404',
        component: loadable(() =>
            import(/*webpackChunkName: "404" */ '@/pages/contract/manage/index')
        )
    },
    {
        path: '/403',
        name: 'exception403',
        component: loadable(() =>
            import(
                /*webpackChunkName: "ContractManage" */ '@/pages/contract/manage/index'
            )
        )
    },
    {
        path: '/500',
        name: 'exception500',
        component: loadable(() =>
            import(/*webpackChunkName: "ExceptionError" */ '@/pages/common/500')
        )
    },
    {
        path: '*',
        name: 'common',
        component: loadable(() =>
            import(/*webpackChunkName: "404"*/ '@/pages/common/404')
        )
    }
]
// 异步路由
export const asyncRouterMap = [
    {
        path: '/',
        name: 'index',
        component: BasicLayout,
        redirect: '/login/login',
        meta: {
            title: '氢流智造'
        },
        children: [
            // 首页
            {
                path: '/dashboard',
                name: 'dashboard',
                component: loadable(() =>
                    import(
                        /*webpackChunkName: "Home" */ '@/pages/Dashboard/index'
                    )
                ),
                meta: {
                    title: '首页',
                    keepAlive: true,
                    auth: ['1']
                }
            },
            {
                path: '/toDigital',
                name: 'toDigital',
                redirect: { name: 'digital' },
                meta: {
                    title: '数字孪生'
                }
            },
            //合同中心
            {
                path: '/contract',
                name: 'contract',
                component: PageView,
                meta: {
                    title: '合同中心'
                },
                children: [
                    {
                        path: '/contract/manage',
                        name: 'contract-manage',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "ContractManage" */ '@/pages/contract/manage/index'
                            )
                        ),
                        meta: {
                            title: '合同中心',
                            keepAlive: false
                        }
                    },
                    {
                        path: '/contract/intentContract',
                        name: 'contract-intentContract',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "intentContract" */ '@/pages/contract/intentContract/index'
                            )
                        ),
                        meta: {
                            title: '意向合同',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/contract/order',
                        name: 'contract-order',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "Order" */ '@/pages/contract/order/index'
                            )
                        ),
                        meta: {
                            title: '订单管理',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/contract/frozenOrder',
                        name: 'contract-frozenOrder',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "FrozenOrder" */ '@/pages/contract/frozenOrder/inddex'
                            )
                        ),
                        meta: {
                            title: '冻结订单',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/contract/outsourcingOrder',
                        name: 'contract-outsourcingOrder',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "outsourcingOrder" */ '@/pages/contract/outsourcingOrder/inidex'
                            )
                        ),
                        meta: {
                            title: '外协订单',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/contract/lostContract',
                        name: 'contract-lostContract',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "lostContract" */ '@/pages/contract/loastContract/index'
                            )
                        ),
                        meta: {
                            title: '意向流失合同',
                            keepAlive: true
                        }
                    }
                ]
            },
            //财务中心
            {
                path: '/finance',
                name: 'finance',
                component: PageView,
                meta: {
                    title: '财务中心'
                },
                children: [
                    {
                        path: '/finance/manage',
                        name: 'finance-manage',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "financeMange" */ '@/pages/finance/manage/index'
                            )
                        ),
                        meta: {
                            title: '财务中心',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/finance/entry',
                        name: 'finance-entry',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "Entry" */ '@/pages/finance/entry/index'
                            )
                        ),
                        meta: {
                            title: '入帐单',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/finance/receipt',
                        name: 'finance-receipt',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "Receipt" */ '@/pages/finance/receipt/index'
                            )
                        ),
                        meta: {
                            title: '收款单',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/finance/writeoff',
                        name: 'finance-writeoff',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "writeoff" */ '@/pages/finance/writeoff/index'
                            )
                        ),
                        meta: {
                            title: '核销单',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/finance/back',
                        name: 'finance-back',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "Back" */ '@/pages/finance/back/index'
                            )
                        ),
                        meta: {
                            title: '退款单',
                            keepAlive: true
                        }
                    }
                ]
            },
            //排产中心
            {
                path: '/productionSchedul',
                name: 'productionSchedul',
                component: PageView,
                meta: {
                    title: '排产中心'
                },
                children: [
                    {
                        path: '/productionSchedul/manage',
                        name: 'productionSchedul-manage',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "Manageschdule" */ '@/pages/schdule/manage/index'
                            )
                        ),
                        meta: {
                            title: '排产中心',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/productionSchedul/orderToProduction',
                        name: 'productionSchedul-orderToProduction',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "orderToProduction" */ '@/pages/schdule/OrderSchdule/index'
                            )
                        ),
                        meta: {
                            title: '订单转排产',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/productionSchedul/strategyManage',
                        name: 'productionSchedul-strategyManage',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "strategyManage" */ '@/pages/schdule/StrategyManage/index'
                            )
                        ),
                        meta: {
                            title: '排产策略管理',
                            keepAlive: true
                        }
                    }
                ]
            },
            // 生产中心
            {
                path: '/productionCenter',
                name: 'productionCenter',
                component: PageView,
                meta: {
                    title: '生产中心'
                },
                children: [
                    {
                        path: '/productionCenter/manage',
                        name: 'productionCenter-manage',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "productionCenter" */ '@/pages/production/manage/index'
                            )
                        ),
                        meta: {
                            title: '生产中心',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/productionCenter/productionSearch',
                        name: 'productionCenter-productionSearch',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "ProductionSearch" */ '@/pages/production/ProductionSearch/index'
                            )
                        ),
                        meta: {
                            title: '生产搜索',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/productionCenter/stockList',
                        name: 'productionCenter-stockList',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "stockList" */ '@/pages/production/StockList/index'
                            )
                        ),
                        meta: {
                            title: '备料清单',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/productionCenter/producTask',
                        name: 'productionCenter-producTask',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "ProductionTask" */ '@/pages/production/ProductionTask/index'
                            )
                        ),
                        meta: {
                            title: '生产任务',
                            keepAlive: true
                        }
                    }
                ]
            },
            // 仓储中心
            {
                path: '/storage',
                name: 'storage',
                component: PageView,
                meta: {
                    title: '仓储中心'
                },
                children: [
                    {
                        path: '/storage/manage',
                        name: 'storage-manage',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "storage" */ '@/pages/storge/manage/index'
                            )
                        ),
                        meta: {
                            title: '仓储中心',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/storage/product',
                        name: 'storage-product',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "product" */ '@/pages/storge/Product/index'
                            )
                        ),
                        meta: {
                            title: '成品仓管理',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/storage/material',
                        name: 'storage-material',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "material" */ '@/pages/storge/Material/index'
                            )
                        ),
                        meta: {
                            title: '原材料仓管理',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/storage/type',
                        name: 'storage-type',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "type" */ '@/pages/storge/Type/index'
                            )
                        ),
                        meta: {
                            title: '物料管理',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/storage/hardwarePack',
                        name: 'storage-hardwarePack',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "hardwarePack" */ '@/pages/storge/HardWarePack/index'
                            )
                        ),
                        meta: {
                            title: '五金打包',
                            keepAlive: true
                        }
                    }
                ]
            },
            // 数据统计
            {
                path: '/statistics',
                name: 'statistics',
                component: PageView,
                meta: {
                    title: '数据统计'
                },
                children: [
                    {
                        path: '/statistics/userData',
                        name: 'statistics-userData',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "UserData" */ '@/pages/statistics/UserData/index'
                            )
                        ),
                        meta: {
                            title: '运营数据',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/statistics/report',
                        name: 'statistics-report',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "Report" */ '@/pages/statistics/Report/index'
                            )
                        ),
                        meta: {
                            title: '报工数据',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/statistics/workCenter',
                        name: 'statistics-workCenter',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "workCenter" */ '@/pages/statistics/WorkCenter/index'
                            )
                        ),
                        meta: {
                            title: '工作中心数据',
                            keepAlive: true
                        }
                    }
                ]
            },
            // 数字化工厂配置
            {
                path: '/system',
                name: 'system',
                component: PageView,
                meta: {
                    title: '数字化工厂配置',
                    keepAlive: true
                },
                children: [
                    {
                        path: '/system/manage',
                        name: 'system-manage',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "systemManage" */ '@/pages/system/manage/index'
                            )
                        ),
                        meta: {
                            title: '配置中心',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/system/organization',
                        name: 'system-organization',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "organization" */ '@/pages/system/Organization/index'
                            )
                        ),
                        meta: {
                            title: '部门及员工管理',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/system/distributor',
                        name: 'system-distributor',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "distributor" */ '@/pages/system/Distributor/index'
                            )
                        ),
                        meta: {
                            title: '客户管理',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/system/supplier',
                        name: 'system-supplier',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "supplier" */ '@/pages/system/Supplier/index'
                            )
                        ),
                        meta: {
                            title: '供应商管理',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/system/flow',
                        name: 'system-flow',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "flow" */ '@/pages/system/Flow/index'
                            )
                        ),
                        meta: {
                            title: '产线管理',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/system/group',
                        name: 'system-group',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "Group" */ '@/pages/system/Group/index'
                            )
                        ),
                        meta: {
                            title: '工作中心管理',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/system/sortingManagement',
                        name: 'system-sortingManagement',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "sortingManagement" */ '@/pages/system/SortingManagement/index'
                            )
                        ),
                        meta: {
                            title: '组件分拣配置',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/system/abnormalFeedbackConfig',
                        name: 'system-abnormalFeedbackConfig',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "abnormalFeedbackConfig" */ '@/pages/system/AbnormalFeebackConfig/index'
                            )
                        ),
                        meta: {
                            title: '报工异常原因配置',
                            keepAlive: true
                        }
                    },
                    {
                        path: '/system/tips',
                        name: 'system-tips',
                        component: loadable(() =>
                            import(
                                /*webpackChunkName: "tips" */ '@/pages/system/Tips/index'
                            )
                        ),
                        meta: {
                            title: '提示设置',
                            keepAlive: true
                        }
                    }
                ]
            }
        ]
    }
]
// 管理员路由
export const adminRouterMap = [
    {
        path: '/',
        name: 'index',
        component: BasicLayout,
        redirect: '/login/login',
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '/admin/factory',
                name: 'admin-factory',
                component: () => import('@/pages/admin/factory/Index'),
                meta: {
                    title: '工厂管理',
                    keepAlive: true
                }
            },
            {
                path: '/admin/role',
                name: 'admin-role',
                component: () => import('@/pages/admin/role/index'),
                meta: {
                    title: '角色管理',
                    keepAlive: true
                }
            },
            {
                path: '/admin/setting',
                name: 'admin-setting',
                component: () => import('@/pages/admin/factory/Index'),
                meta: {
                    title: '配置管理',
                    keepAlive: true
                }
            },
            {
                path: '/admin/appversion',
                name: 'admin-appversion',
                component: () => import('@/pages/admin/manageappversion/Index'),
                meta: {
                    title: '应用版本管理',
                    keepAlive: true
                }
            }
        ]
    }
]
