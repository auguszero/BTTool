package com.bttool.stream;

import org.junit.Before;
import org.junit.Test;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

public class StreamDemo1 {
    private List<User> list = new ArrayList<User>();
    public static void main(String[] args) {

        // 将数组，list，转换为stream  并直接赋值给stream
        // 1、数组
        String[] arr = new String[]{"ab", "cd", "ef"};
        Stream<String> arrStream = Arrays.stream(arr);
        // 2、集合
        List<String> list = Arrays.asList("ab", "cd", "ef");
        Stream<String> colStream = list.stream();
        // 3、值
        Stream<String> stream = Stream.of("ab", "cd", "ef");

    }


    @Before
    public void testModel(){
        list = Arrays.asList(
                // name，age
                new User("张三", 11),
                new User("王五", 20),
                new User("王五", 91),
                new User("张三", 8),
                new User("李四", 44),
                new User("李四", 44),
                new User("李四", 44)
        );

    }



    /**
     * forEach 迭代输出每条数据.
     */
    @Test
    public void testForEach(){
        // java 8 前
        System.out.println("java 8 前");
        for(User user: list){
            System.out.println(user);
        }
        // java 8 lambda
        System.out.println("java 8 lambda");
        list.forEach(user -> System.out.println(user));

        // java 8 stream lambda
        System.out.println("java 8 stream lambda");
        list.stream().forEach(user -> System.out.println(user));
    }


    /**
     * sort 排序.  reversed 排序
     */
    @Test
    public void testSort() {
        System.out.println("-----排序前-----");
        list.forEach(user -> System.out.println(user));
        System.out.println("-----排序后-----");
        // java 8 前
        System.out.println("java 8 前");
        Collections.sort(list, new Comparator<User>() {
            @Override
            public int compare(User o1, User o2) {
                return o1.getAge()>o2.getAge()?1:-1;
            }
        });
        for (User user : list) {
            System.out.println(user);
        }
        // java 8 stream 方法引用
        System.out.println("java 8 stream 方法引用");
        list.stream().sorted(Comparator.comparing(User::getAge)).forEach(user -> System.out.println(user));
    }

    /**
     * filter 过滤.
     */
    @Test
    public void testFilter() {
        // 输出年龄大于50的人
        System.out.println("-----过滤前-----");
        list.forEach(user -> System.out.println(user));
        System.out.println("-----过滤后-----");
        // java 8 前
        System.out.println("java 8 前");
        for(User user: list){
            if (user.getAge() > 50) {
                System.out.println(user);
            }
        }
        // java 8 stream
        System.out.println("java 8 stream");
        list.stream().filter((User user) -> user.getAge() > 50).forEach(user -> System.out.println(user));
    }

    /**
     * limit 截断.
     */
    @Test
    public void testLimit() {
        // 从第三个开始截断，只输出前三个
        System.out.println("-----截断前-----");
        list.forEach(user -> System.out.println(user));
        System.out.println("-----截断后-----");
        // java 8 前
        System.out.println("java 8 前");
        for (int i = 0; i < 3; i++) {
            System.out.println(list.get(i));
        }
        // java 8 stream
        System.out.println("java 8 stream");
        list.stream().limit(3).forEach(user -> System.out.println(user));
    }

    /**
     * skip 跳过. 与limit互斥，使用该方法跳过元素
     */
    @Test
    public void testSkip() {
        // 跳过前三个元素，从第四个开始输出
        System.out.println("-----跳过前-----");
        list.forEach(user -> System.out.println(user));
        System.out.println("-----跳过后-----");
        // java 8 前
        System.out.println("java 8 前");
        for (int i = 3; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
        // java 8 stream
        System.out.println("java 8 stream");
        list.stream().skip(3).forEach(user -> System.out.println(user));
    }

    /**
     * distinct 去重.
     */
    @Test
    public void testDistinct() {
        // 因为Arrays.asList() 返回的是Arrays的内部类ArrayList，操作remove，add会报错
        List<User> users = new ArrayList(list);
        // 为list去除重复数据
        System.out.println("-----去重前-----");
        list.forEach(user -> System.out.println(user));
        System.out.println("-----去重后-----");
        // java 8 前
        System.out.println("java 8 前");
        for (int i = 0; i < users.size() - 1; i++) {
            for (int j = users.size() - 1; j > i; j--) {
                if (users.get(j).getAge() == users.get(i).getAge() && users.get(j).getName()
                        .equals(users.get(i).getName())) {
                    users.remove(i);
                }
            }
        }
        for (User user : users) {
            System.out.println(user);
        }
        // java 8 stream
        System.out.println("java 8 stream");
        users.stream().distinct().forEach(user -> System.out.println(user));
    }


    /**
     * 完成去重+按照年龄大于40以后从小到大+只取前二
     */
    @Test
    public void testdemo01(){
        List<User> users = new ArrayList(list);
        users.stream().distinct().filter(user -> user.getAge()>40)
                .sorted(Comparator.comparing(User::getAge).reversed())
                .limit(1)
                .forEach(user -> System.out.println(user));
    }



    /**
     * 测试计算.
     */
    @Test
    public void testNum() {
        IntSummaryStatistics num = list.stream().mapToInt(u -> u.getAge())
                .summaryStatistics();
        System.out.println("总共人数：" + num.getCount());
        System.out.println("平均年龄：" + num.getAverage());
        System.out.println("最大年龄：" + num.getMax());
        System.out.println("最小年龄：" + num.getMin());
        System.out.println("年龄之和：" + num.getSum());
    }

    /**
     * map 映射.
     */
    @Test
    public void testMap() {
        // 只输出所有人的年龄
        list.stream().forEach(user -> System.out.println(user));
        System.out.println("映射后----->");
        List<Integer> ages = list.stream().map(user -> user.getAge()).collect(toList());
        ages.forEach(age -> System.out.println(age));

        // 小写转大写
        List<String> words = Arrays.asList("aaa", "vvvv", "cccc");
        System.out.println("全部大写---->");
        List<String> collect = words.stream().map(s -> s.toUpperCase()).collect(toList());
        collect.forEach(s -> System.out.println(s));
    }


    /**
     * flatMap .
     */
    @Test
    public void testFlatMap() {
        //创建一个 装有两个泛型为integer的集合
        Stream<List<Integer>> stream = Stream.of(Arrays.asList(1, 2, 3), Arrays.asList(4, 5));
        // 将两个合为一个
        Stream<Integer> integerStream = stream.flatMap(
                (Function<List<Integer>, Stream<Integer>>) integers -> integers.stream());
        // 为新的集合
        List<Integer> collect = integerStream.collect(toList());
        System.out.println("新stream大小:"+collect.size());
        System.out.println("-----合并后-----");
        collect.forEach(o -> System.out.println(o));
    }





    class User  {
        private String name ;
        private int age ;

        @Override
        public String toString() {
            return "User{" +
                    "name='" + name + '\'' +
                    ", age=" + age +
                    '}';
        }

        public User() {
        }

        public User(String name, int age) {

            this.name = name;
            this.age = age;
        }

        public String getName() {

            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            User user = (User) o;
            return age == user.age &&
                    name.equals( user.name);
        }


        @Override
        public int hashCode() {

            return Objects.hash(name, age);
        }



    }
}
